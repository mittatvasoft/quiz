import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import StepperActions from 'components/StepperActions'
import { saveQuestionAnswer } from 'context/actions/quiz'
import { useQuiz } from 'context/quiz'
import { useStepper } from 'context/stepper'
import React, { useEffect, useState } from 'react'
import { SimplifiedQuestion } from 'utility/interfaces'

interface SingleChoiceQuestionProps {
  data: SimplifiedQuestion
}

const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({ data }) => {
  const [value, setValue] = useState<number | ''>('')
  const { getSavedAnswer, dispatch } = useQuiz()
  const { handleNext } = useStepper()

  useEffect(() => {
    const res = getSavedAnswer(data.questionId)
    if (res && typeof res === 'number') setValue(res)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value) {
      dispatch(saveQuestionAnswer({ questionId: data.questionId, answerId: value }))
      handleNext()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <FormControl required variant="standard">
        <FormLabel id={`question-${data.questionId}`}>{data.title}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name={`question-${data.questionId}`}
          value={value}
          onChange={(_, v) => setValue(+v)}
        >
          {data.options.map((o) => (
            <FormControlLabel
              key={o.id}
              value={o.id}
              control={<Radio required />}
              label={o.title}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <StepperActions />
    </form>
  )
}

export default SingleChoiceQuestion
