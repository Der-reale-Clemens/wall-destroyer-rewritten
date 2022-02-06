import React, {FC} from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Window } from './components/Window';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  }
})


export const App: FC = () => {

  return (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <Window/>
  </ThemeProvider>)
}