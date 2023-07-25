import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme"
import GlobalStyle from "./styles/global"
import { AuthProvider } from './hooks/auth'
import { SearchProvider } from './hooks/search'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
  <GlobalStyle />
  <AuthProvider>
  <SearchProvider>
   <Routes/>
   </SearchProvider>
  </AuthProvider>
</ThemeProvider>

)
