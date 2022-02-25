import { QuizActions } from 'context/actions/quiz'
import React from 'react'
import { AnswerType, QuestionType } from 'utility/enums'

export interface ValueMap {
  title: string
  value: number
}

export interface LanguageMap {
  languageId: number
  title: string
}

export interface AnswerMap {
  id: number
  languageInfo: Array<LanguageMap>
}

export interface User {
  name: string
  genderId: number
  languageId: number
}

export interface Question {
  questionId: number
  type: QuestionType
  correctAnswerId: number | Array<number>
  questionInfo: Array<LanguageMap>
  optionsInfo: Array<AnswerMap>
}

export interface SimplifiedOption {
  id: number
  title: string
}

export interface SimplifiedQuestion {
  questionId: number
  type: QuestionType
  title: string
  options: Array<SimplifiedOption>
}

export interface UserInput {
  questionId: number
  answerId: number | Array<number>
}

export interface ChartItem {
  name: string
  value: number
}

export interface ReportSingleQA {
  id: number
  question: string
  status: AnswerType
  correctAnswer?: string
  selectedAnswer?: string
}

export interface ReportState {
  chartData: Array<ChartItem>
  percentage: string
  questionAnswers: Array<ReportSingleQA>
}

export interface QuizState {
  user?: User
  questions: Array<Question>
  userInputs: Array<UserInput>
}

export interface QuizContextState {
  state: QuizState
  dispatch: React.Dispatch<QuizActions>
}
