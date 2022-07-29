import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { achievementsTrimmed } from "../data/achievements";
import { producersTrimmed } from "../data/producers";
import { resourcesTrimmed } from "../data/resources";
import { upgradesTrimmed } from "../data/upgrades";
import { createSystem } from "../system/system";
import { Achievements, Resources, Upgrades } from "../system/types";
import { buyProducer as buyProducerSystem, buyUpgrade as buyUpgradeSystem } from "../system/updateFunctions"


const system = createSystem(producersTrimmed, resourcesTrimmed, upgradesTrimmed, achievementsTrimmed)
export const systemData = system.data

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
        buyUpgrade: (state, {payload: upgrade}: PayloadAction<keyof Upgrades>) => {
            const [newUpgrades, newResources] = buyUpgradeSystem(createSystemObject(state), upgrade)
            state.boughtUpgrades = newUpgrades
            state.resources = newResources
        },
        increaseResource: (state, {payload}: PayloadAction<[keyof Resources, number]>) => {
            const [resource, amount] = payload
            state.resources[resource] += amount
        },
        decreaseResource: (state, {payload}: PayloadAction<[keyof Resources, number]>) => {
            const [resource, amount] = payload
            state.resources[resource] -= amount
        },
        addUnlockedUpgrades: (state, {payload: newUnlockedUpgrades}: PayloadAction<Array<keyof Upgrades>>) => {
            state.unlockedUpgrades = state.unlockedUpgrades.concat(newUnlockedUpgrades)
        },
        addAchievements: (state, {payload: newAchievements}: PayloadAction<Array<keyof Achievements>>) => {
            state.achievements = state.achievements.concat(newAchievements)
        }
    }
})

export const systemReducer = systemSlice.reducer

export const {
    buyProducer,
    buyUpgrade,
    increaseResource,
    decreaseResource,
    addUnlockedUpgrades,
    addAchievements
} = systemSlice.actions