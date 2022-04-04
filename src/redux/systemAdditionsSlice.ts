import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    wall: 0,
}

const systemAdditionsSlice = createSlice({
    name: "systemAdditions",
    initialState,
    reducers: {
        increaseWall: (state) => {
            state.wall += 1
        }
    }
})

export const systemAdditionsReducer = systemAdditionsSlice.reducer

export const {
    increaseWall
} = systemAdditionsSlice.actions