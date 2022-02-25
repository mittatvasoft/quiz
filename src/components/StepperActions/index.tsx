import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useStepper } from 'context/stepper'
import React from 'react'

const StepperActions: React.FC = () => {
  const { step, isLastStep, handleBack } = useStepper()
  return (
    <Grid container spacing={2}>
      {step !== 0 && (
        <Grid item>
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        </Grid>
      )}
      <Grid item>
        <Button type="submit" variant="contained">
          {isLastStep ? 'Finish' : 'Next'}
        </Button>
      </Grid>
    </Grid>
  )
}

export default StepperActions
