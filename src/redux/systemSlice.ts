import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {buyProducer as buyProducerSystem, createSystem, Resources} from "idle-game-creation-library"
import { achievementsTrimmed } from "../data/achievements";
import { producersTrimmed } from "../data/producers";
import { resourcesTrimmed } from "../data/resources";


const system = createSystem(producersTrimmed, resourcesTrimmed, achievementsTrimmed )

const systemSlice = createSlice({
    name: "system",
    initialState: system,
    reducers: {
        buyProducer: (state, {payload: producer}: PayloadAction<keyof typeof system.data.producers>) => {
            const [newProducers, newResources] = buyProducerSystem(state, producer)
            state.player.producers = newProducers
            state.player.resources = newResources
        },
        increaseResource: (state, {payload}: PayloadAction<[keyof typeof resourcesTrimmed, number]>) => {
            const [resource, amount] = payload
            state.player.resources[resource] += amount
        },
        decreaseResource: (state, {payload}: PayloadAction<[keyof typeof resourcesTrimmed, number]>) => {
            const [resource, amount] = payload
            state.player.resources[resource] -= amount
        },
        addAchievements: (state, {payload: newAchievements}: PayloadAction<Array<keyof typeof system.data.achievements>>) => {
            state.player.achievements = state.player.achievements.concat(newAchievements)
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