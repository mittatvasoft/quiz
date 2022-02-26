import { questions } from 'data'
import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
import { AnswerType, QuestionType } from 'utility/enums'
import {
  QuizContextState,
  QuizState,
  ReportSingleQA,
  ReportState,
  SimplifiedQuestion
} from 'utility/interfaces'
import { QuizActions, QuizActionType } from './actions/quiz'

const defaultQuizState: QuizState = {
  questions,
  userInputs: []
}

const quizContextState: QuizContextState = {
  state: defaultQuizState,
  dispatch: () => undefined
}

const quizReducer = (state: QuizState, action: QuizActions): QuizState => {
  switch (action.type) {
    case QuizActionType.SaveUserData: {
      return { ...state, user: action.payload }
    }
    case QuizActionType.SaveAnsweredQuestionData: {
      const isAlreadyAnswered = state.userInputs.findIndex(
        (q) => q.questionId === action.payload.questionId
      )
      if (isAlreadyAnswered > -1) {
        const updatedInputs = state.userInputs.map((i) =>
          i.questionId === action.payload.questionId ? action.payload : i
        )
        return { ...state, userInputs: updatedInputs }
      }
      return { ...state, userInputs: [...state.userInputs, action.payload] }
    }
    default:
      return state
  }
}

const QuizContext = createContext(quizContextState)

const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, defaultQuizState)
  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>
}

export const useQuiz = () => {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error('useQuiz must be used within a <QuizProvider> component.')
  }

  const getQuestion = (questionId: number) => {
    const currentQuestion = context.state.questions.find((q) => q.questionId === questionId)
    if (!currentQuestion) throw new Error('Question Not Found')
    const title =
      currentQuestion.questionInfo?.find((qi) => qi.languageId === context.state.user?.languageId)
        ?.title || ''
    const compressedOptions = currentQuestion.optionsInfo.map((oi) => {
      const compressedOptionTitle = oi.languageInfo.find(
        (lang) => lang.languageId === context.state.user?.languageId
      )?.title
      return {
        id: oi.id,
        title: compressedOptionTitle || ''
      }
    })
    const compressedQuestion: SimplifiedQuestion = {
      questionId: currentQuestion.questionId,
      type: currentQuestion.type,
      title,
      options: compressedOptions
    }
    return compressedQuestion
  }

  const getSavedAnswer = (questionId: number) => {
    return context.state.userInputs.find((ui) => ui.questionId === questionId)?.answerId || ''
  }

  const generateReport = (): ReportState => {
    let totalCorrect = 0
    let totalUnAnswered = 0
    const questionAnswers: Array<ReportSingleQA> = []
    const userLanguageId = context.state.user?.languageId || 1
    context.state.questions.forEach((q) => {
      const foundUserInput = context.state.userInputs.find((ui) => ui.questionId === q.questionId)
      const questionInPreferredLanguage =
        q.questionInfo.find((qi) => qi.languageId === userLanguageId)?.title || 'Not Found'
      const correctAnswerString =
        q.type === QuestionType.Single
          ? q.optionsInfo
              .find((oi) => oi.id === q.correctAnswerId)
              ?.languageInfo?.find((li) => li.languageId === userLanguageId)?.title || 'Not Found'
          : (q.correctAnswerId as number[])
              .map((ca) => {
                const answer =
                  q.optionsInfo
                    .find((oi) => oi.id === ca)
                    ?.languageInfo?.find((li) => li.languageId === userLanguageId)?.title ||
                  'Not Found'
                return answer
              })
              ?.join(', ') || 'Not Found'

      const selectedAnswerString =
        q.type === QuestionType.Single
          ? q.optionsInfo
              .find((oi) => oi.id === foundUserInput?.answerId)
              ?.languageInfo?.find((li) => li.languageId === userLanguageId)?.title || 'Unanswered'
          : ((foundUserInput?.answerId || []) as number[])
              .map((i) => {
                const yourAnswer =
                  q.optionsInfo
                    .find((oi) => oi.id === i)
                    ?.languageInfo?.find((li) => li.languageId === userLanguageId)?.title ||
                  'Unanswered'
                return yourAnswer
              })
              ?.join(', ') || 'Unanswered'

      if (!foundUserInput?.questionId) {
        totalUnAnswered += 1
        questionAnswers.push({
          id: q.questionId,
          question: questionInPreferredLanguage,
          correctAnswer: correctAnswerString,
          status: AnswerType.Wrong,
          selectedAnswer: selectedAnswerString
        })
      } else {
        if (q.type === QuestionType.Single) {
          if (foundUserInput.answerId === q.correctAnswerId) {
            totalCorrect += 1
            questionAnswers.push({
              id: q.questionId,
              question: questionInPreferredLanguage,
              correctAnswer: correctAnswerString,
              status: AnswerType.Correct
            })
          } else {
            questionAnswers.push({
              id: q.questionId,
              question: questionInPreferredLanguage,
              correctAnswer: correctAnswerString,
              status: AnswerType.Wrong,
              selectedAnswer: selectedAnswerString
            })
          }
        }
        if (q.type === QuestionType.Multiple) {
          if (JSON.stringify(foundUserInput.answerId) === JSON.stringify(q.correctAnswerId)) {
            totalCorrect += 1
            questionAnswers.push({
              id: q.questionId,
              question: questionInPreferredLanguage,
              correctAnswer: correctAnswerString,
              status: AnswerType.Correct
            })
          } else {
            questionAnswers.push({
              id: q.questionId,
              question: questionInPreferredLanguage,
              correctAnswer: correctAnswerString,
              status: AnswerType.Wrong,
              selectedAnswer: selectedAnswerString
            })
          }
        }
      }
    })

    const totalIncorrect = context.state.questions.length - (totalCorrect + totalUnAnswered)
    const percentage = ((totalCorrect / context.state.questions.length) * 100).toFixed(2)
    const payload: ReportState = {
      chartData: [
        { name: 'Total Correct', value: totalCorrect },
        { name: 'Total Incorrect', value: totalIncorrect },
        { name: 'Total Unanswered', value: totalUnAnswered }
      ],
      percentage,
      questionAnswers
    }
    return payload
  }
  return { ...context, getQuestion, getSavedAnswer, generateReport }
}

export default QuizProvider
