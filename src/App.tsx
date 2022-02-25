import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'theme'
import Home from 'pages'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
