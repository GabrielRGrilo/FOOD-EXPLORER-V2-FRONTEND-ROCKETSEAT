import { ThemeProvider } from "styled-components";

import GlobalStyle from "./src/styles/global"
import theme from "./src/styles/theme"

import { AuthProvider } from './src/hooks/auth';
import { SignIn } from "./src/pages/SignIn";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
       <SignIn/>
      </AuthProvider>
    </ThemeProvider>
  );
}
