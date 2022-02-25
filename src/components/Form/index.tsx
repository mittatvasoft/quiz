import React, { useState } from 'react'
import {
  Paper,
  Stack,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@mui/material'
import { genders, languages } from 'utility/constants'
import { useQuiz } from 'context/quiz'
import { saveUser } from 'context/actions/quiz'
import { User } from 'utility/interfaces'

interface FormProps {
  onData: VoidFunction
}

const Form: React.FC<FormProps> = ({ onData }) => {
  const [genderInput, setGenderInput] = useState(1)
  const [languageInput, setLanguageInput] = useState(1)
  const [nameInput, setNameInput] = useState('')
  const { dispatch } = useQuiz()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!nameInput.trim()) return
    const payload: User = {
      name: nameInput.trim(),
      genderId: genderInput,
      languageId: languageInput
    }
    dispatch(saveUser(payload))
    onData()
  }

  return (
    <Paper elevation={6} sx={{ padding: 2, width: 400, maxWidth: '100%' }}>
      <Stack spacing={2} component="form" autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          required
          label="Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          id="name-input"
          fullWidth
          placeholder="Enter your name"
          size="small"
        />
        <FormControl required>
          <FormLabel id="gender-input">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="gender-input"
            name="gender-input"
            value={genderInput}
            onChange={(_, val) => setGenderInput(+val)}
          >
            {genders.map((g) => (
              <FormControlLabel key={g.value} value={g.value} control={<Radio />} label={g.title} />
            ))}
          </RadioGroup>
        </FormControl>
        <FormControl required>
          <FormLabel id="language-input">Language</FormLabel>
          <RadioGroup
            row
            aria-labelledby="language-input"
            name="language-input"
            value={languageInput}
            onChange={(_, val) => setLanguageInput(+val)}
          >
            {languages.map((lang) => (
              <FormControlLabel
                key={lang.value}
                value={lang.value}
                control={<Radio />}
                label={lang.title}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </Stack>
    </Paper>
  )
}

export default Form
