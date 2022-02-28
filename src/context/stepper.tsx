/* eslint-disable @typescript-eslint/no-explicit-any */
import { Step, StepButton, Stepper } from '@mui/material'
import React, { useContext, createContext, useState } from 'react'
import { useQuiz } from './quiz'

interface StepperContext {
  step: number
  handleNext: VoidFunction
  goToStep: (value: number) => void
  handleBack: VoidFunction
  isLastStep: boolean
}

interface StepperProps {
  onFinish: VoidFunction
}

export const StepperContext = createContext<StepperContext | undefined>(undefined)

const CustomStepper: React.FC<StepperProps> = ({ children, onFinish }) => {
  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(0)
  const { state } = useQuiz()

  const isLastStep = step === childrenArray.length - 1

  const currentChild = childrenArray[step]

  const handleNext = () => {
    if (isLastStep) {
      onFinish()
    } else {
      setStep((s) => s + 1)
    }
  }
  const goToStep = (index: number) => {
    setStep(() => index)
  }

  const handleBack = () => {
    setStep((s) => s - 1)
  }

  const isCompleted = (questionId: number) => {
    return state.userInputs?.findIndex((ui) => ui.questionId === questionId) > -1
  }

  return (
    <StepperContext.Provider
      value={{
        step,
        handleNext,
        goToStep,
        handleBack,
        isLastStep
      }}
    >
      {state.questions.length > 0 && (
        <Stepper nonLinear activeStep={step}>
          {state.questions.map((q, i) => (
            <Step key={q.questionId} completed={isCompleted(q.questionId)}>
              <StepButton onClick={() => i !== step && setStep(i)} />
            </Step>
          ))}
        </Stepper>
      )}
      {currentChild}
    </StepperContext.Provider>
  )
}

export const useStepper = (): StepperContext => {
  const context = useContext(StepperContext)
  if (!context) {
    throw new Error('useStepper must be used within a <Stepper> component.')
  }
  return context
}

export default CustomStepper
