import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Form from 'components/Form'
import QuizProvider from 'context/quiz'
import { Flow } from 'utility/enums'
import QuizPage from './Quiz'
import ReportPage from './Report'
import { questions } from 'data'

const Home: React.FC = () => {
  const [currentElement, setCurrentElement] = useState(Flow.Form)
  return (
    <QuizProvider questions={questions}>
      <Grid container justifyContent="center" marginTop={10}>
        {currentElement === Flow.Form && <Form onData={() => setCurrentElement(Flow.Quiz)} />}
        {currentElement === Flow.Quiz && (
          <QuizPage onFinish={() => setCurrentElement(Flow.Report)} />
        )}
        {currentElement === Flow.Report && <ReportPage />}
      </Grid>
    </QuizProvider>
  )
}

export default Home
