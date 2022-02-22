import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    lastUpdate: 0,
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLastUpdate: (state, {payload: lastUpdate}: PayloadAction<number>) => {
            state.lastUpdate = lastUpdate
        }
    }
})

export const appReducer = appSlice.reducer

export const {
    setLastUpdate
} = appSlice.actions