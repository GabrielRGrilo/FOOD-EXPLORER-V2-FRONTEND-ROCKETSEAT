import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styled-components'
import { SignIn } from './pages/SignIn'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
  <GlobalStyles/>
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,

  </ThemeProvider>
)
