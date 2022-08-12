import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { resources } from "../data/resources"
import { Resources } from "../system/types";
import { createObjectFromKeys } from "../util"

const initialState = {
    wall: 0,
    resourcesPerSecond: createObjectFromKeys(resources, () => 0)
}

const systemAdditionsSlice = createSlice({
    name: "systemAdditions",
    initialState,
    reducers: {
        increaseWall: (state) => {
            state.wall += 1
        },
        updateResourcesPerSecond: (state, {payload}: PayloadAction<[keyof Resources, number]>) => {
            const [resource, production] = payload;
            state.resourcesPerSecond[resource] = production
        }
    }
})

export const systemAdditionsReducer = systemAdditionsSlice.reducer

export const {
    increaseWall,
    updateResourcesPerSecond
} = systemAdditionsSlice.actions