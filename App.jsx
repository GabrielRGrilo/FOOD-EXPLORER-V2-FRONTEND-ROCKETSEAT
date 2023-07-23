import { ThemeProvider } from "styled-components";

import GlobalStyle from "./src/styles/global"
import theme from "./src/styles/theme"

import { SearchProvider } from "./src/hooks/search";
import { AuthProvider } from './src/hooks/auth';
import { Routes } from "./src/routes";


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
      <SearchProvider>
       <Routes/>
       </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
