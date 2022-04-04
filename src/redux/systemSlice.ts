import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {buyProducer as buyProducerSystem, createSystem} from "idle-game-creation-library"
import { producers } from "../data/producers";
import { Resources, resources } from "../data/resources";

const system = createSystem(producers, resources)

const systemSlice = createSlice({
    name: "system",
    initialState: system,
    reducers: {
        buyProducer: (state, {payload: producer}: PayloadAction<keyof typeof system.data.producers>) => {
            const [newProducers, newResources] = buyProducerSystem(state, producer)
            state.player.producers = newProducers
            state.player.resources = newResources
        },
        increaseResource: (state, {payload}: PayloadAction<[Resources, number]>) => {
            const [resource, amount] = payload
            state.player.resources[resource] += amount
        },
        decreaseResource: (state, {payload}: PayloadAction<[Resources, number]>) => {
            const [resource, amount] = payload
            state.player.resources[resource] -= amount
        }
    }
})

export const systemReducer = systemSlice.reducer

export const {
    buyProducer,
    increaseResource,
    decreaseResource
} = systemSlice.actions