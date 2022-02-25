import React, { useState, useEffect } from 'react'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { SimplifiedQuestion } from 'utility/interfaces'
import { useQuiz } from 'context/quiz'
import StepperActions from 'components/StepperActions'
import { useStepper } from 'context/stepper'
import { saveQuestionAnswer } from 'context/actions/quiz'

interface MultiChoiceQuestionProps {
  data: SimplifiedQuestion
}

const MultiChoiceQuestion: React.FC<MultiChoiceQuestionProps> = ({ data }) => {
  const [value, setValue] = useState<Array<number>>([])
  const { getSavedAnswer, dispatch } = useQuiz()
  const { handleNext } = useStepper()

  useEffect(() => {
    const res = getSavedAnswer(data.questionId)
    if (res && Array.isArray(res)) setValue(res)
  }, [])

  const handleChange = (answerId: number) => {
    if (value.includes(answerId)) {
      const filtered = value.filter((v) => v !== answerId)
      setValue(filtered)
    } else {
      setValue((prev) => [...prev, answerId])
    }
  }

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
      <FormControl required={!value.length} component="fieldset" variant="standard">
        <FormLabel component="legend">{data.title}</FormLabel>
        <FormGroup>
          {data.options.map((o) => (
            <FormControlLabel
              key={o.id}
              control={
                <Checkbox
                  required={!value.length}
                  checked={value.includes(o.id)}
                  onChange={() => handleChange(o.id)}
                  name={o.title}
                />
              }
              label={o.title}
            />
          ))}
        </FormGroup>
      </FormControl>
      <br />
      <br />
      <StepperActions />
    </form>
  )
}

export default MultiChoiceQuestion
