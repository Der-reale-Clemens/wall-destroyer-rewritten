import {FC, useEffect} from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Window } from './components/Window';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { update } from './functions';
import { setLastUpdate } from './redux/appSlice';
import { increaseResource } from './redux/systemSlice';
import { themes } from './data/themes';

export const App: FC = () => {
  const theme = useAppSelector(s => s.appReducer.theme) as keyof typeof themes
  const dispatch = useAppDispatch();

  useEffect(() => { 
    const interval = setInterval(() => {
      update(dispatch)
    }, 66)

    dispatch(increaseResource(["damage", 1]))
    dispatch(setLastUpdate(new Date().getTime()))

    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
  <ThemeProvider theme={themes[theme]}>
    <CssBaseline/>
    <Window/>
  </ThemeProvider>)
}