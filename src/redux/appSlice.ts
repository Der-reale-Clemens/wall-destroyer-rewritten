import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Flags = "destroyedWall0" | "destroyedWall1" | "destroyedWall2" | "destroyedWall3"

const initialState = {
    lastUpdate: 0,
    theme: "dark",
    format: "standard",
    flags: [] as Array<Flags>, //Persistent store of all already triggered flags
    currentFlags: [] as Array<Flags> //Currently active flags, after use should be removed
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLastUpdate: (state, {payload: lastUpdate}: PayloadAction<number>) => {
            state.lastUpdate = lastUpdate
        },
        setTheme: (state, {payload: theme}: PayloadAction<string>) => {
            state.theme = theme
        },
        setFormat: (state, {payload: format}: PayloadAction<string>) => {
            state.format = format
        },
        addCurrentFlag: (state, {payload: event}: PayloadAction<Flags>) => {
            state.flags.push(event)
            state.currentFlags.push(event)
        },
        removeCurrentFlag: (state, {payload: event}: PayloadAction<Flags>) => {
            state.currentFlags = state.currentFlags.filter(f => f !== event)
        }
    }
})

export const appReducer = appSlice.reducer

export const {
    setLastUpdate,
    setTheme,
    setFormat,
    addCurrentFlag,
    removeCurrentFlag
} = appSlice.actions