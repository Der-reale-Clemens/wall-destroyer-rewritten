import {FC, useEffect} from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Window } from './components/Window';
import { useAppDispatch } from './redux/hooks';
import { update } from './functions';
import { setLastUpdate } from './redux/appSlice';
import { increaseResource } from './redux/systemSlice';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  }
})


export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      update(dispatch)
    }, 100)

    dispatch(increaseResource(["money", 1000]))
    dispatch(setLastUpdate(new Date().getTime()))

    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <Window/>
  </ThemeProvider>)
}