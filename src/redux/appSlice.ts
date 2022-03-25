import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    lastUpdate: 0,
    theme: "light",
    format: "standard"
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
        }
    }
})

export const appReducer = appSlice.reducer

export const {
    setLastUpdate,
    setTheme,
    setFormat
} = appSlice.actions