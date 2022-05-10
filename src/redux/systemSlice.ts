import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {buyProducer as buyProducerSystem, createSystem } from "idle-game-creation-library"
import { achievementsTrimmed } from "../data/achievements";
import { producersTrimmed } from "../data/producers";
import { resourcesTrimmed } from "../data/resources";


const system = createSystem(producersTrimmed, resourcesTrimmed, achievementsTrimmed)
const systemData = system.data

export const createSystemObject = (player: typeof system.player) => ({
    data: system.data,
    player: player
})

const systemSlice = createSlice({
    name: "system",
    initialState: system.player,
    reducers: {
        buyProducer: (state, {payload: producer}: PayloadAction<keyof typeof system.data.producers>) => {
            const [newProducers, newResources] = buyProducerSystem(createSystemObject(state), producer)
            state.producers = newProducers
            state.resources = newResources
        },
        increaseResource: (state, {payload}: PayloadAction<[keyof typeof resourcesTrimmed, number]>) => {
            const [resource, amount] = payload
            state.resources[resource] += amount
        },
        decreaseResource: (state, {payload}: PayloadAction<[keyof typeof resourcesTrimmed, number]>) => {
            const [resource, amount] = payload
            state.resources[resource] -= amount
        },
        addAchievements: (state, {payload: newAchievements}: PayloadAction<Array<keyof typeof system.data.achievements>>) => {
            state.achievements = state.achievements.concat(newAchievements)
        }
    }
})

export const systemReducer = systemSlice.reducer

export const {
    buyProducer,
    increaseResource,
    decreaseResource,
    addAchievements
} = systemSlice.actions