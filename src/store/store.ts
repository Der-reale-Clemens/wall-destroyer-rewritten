import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
    lastUpdate: number,
    theme: string,
    format: string,
    flags: Array<string>,
    currentFlags: Array<string>
}
type Actions = {
    setLastUpdate: (time: number) => void,
    setTheme: (theme: string) => void,
    setFormat: (format: string) => void,
    addCurrentFlag: (flag: string) => void,
    removeCurrentFlag: (flag: string) => void,
}


export const useAppStore = create(immer<State & Actions>(set => ({
    lastUpdate: 0,
    theme: 'auto',
    format: 'standard',
    gameMode: '',
    flags: [] ,
    currentFlags: [],
    setLastUpdate: time => 
        set(state => {
            state.lastUpdate = time
        }),
    setTheme: theme =>
        set(state => {
            state.theme = theme
        }),
    setFormat: format =>
        set(state => {
            state.format = format
        }),
    addCurrentFlag: flag =>
        set(state => {
            state.currentFlags.push(flag)
        }),
    removeCurrentFlag: flag =>
        set(state => {
            state.currentFlags = state.currentFlags.filter(f => f !== flag)
        })
})))