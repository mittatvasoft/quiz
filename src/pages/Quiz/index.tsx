import Paper from '@mui/material/Paper'
import QuestionWrapper from 'components/QuestionWrapper'
import { useQuiz } from 'context/quiz'
import CustomStepper from 'context/stepper'
import React from 'react'

interface QuizPageProps {
  onFinish: VoidFunction
}

const QuizPage: React.FC<QuizPageProps> = ({ onFinish }) => {
  const { state } = useQuiz()
  return (
    <Paper elevation={6} sx={{ padding: 2, width: 500, maxWidth: '100%' }}>
      <CustomStepper onFinish={onFinish}>
        {state.questions.map((q) => (
          <QuestionWrapper key={q.questionId} questionId={q.questionId} />
        ))}
      </CustomStepper>
    </Paper>
  )
}

export default QuizPage
