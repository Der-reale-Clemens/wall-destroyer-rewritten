import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { achievementsTrimmed } from '../data/achievements'
import { producersTrimmed } from '../data/producers'
import { resourcesTrimmed } from '../data/resources'
import { upgradesTrimmed } from '../data/upgrades'
import { createSystem } from '../system/system'
import type { Achievements, Producers, Resources, Upgrades } from '../system/types'
import { buyProducer as buyProducerSystem, buyUpgrade as buyUpgradeSystem } from "../system/updateFunctions"

type State = {
    data: typeof system.player
}
type Actions = {
    buyProducer: (producer: keyof Producers) => void,
    buyUpgrade: (upgrade: keyof Upgrades) => void,
    increaseResource: (resource: keyof Resources, amount: number) => void,
    decreaseResource: (resource: keyof Resources, amount: number) => void,
    addUnlockedUpgrades: (upgrades: Array<keyof Upgrades>) => void,
    addAchievements: (achievements: Array<keyof Achievements>) => void
}

const system = createSystem(producersTrimmed, resourcesTrimmed, upgradesTrimmed, achievementsTrimmed)
export const systemData = system.data

export const createSystemObject = (player: typeof system.player) => ({
    data: system.data,
    player: player
})


export const useSystemStore = create(immer<State & Actions>(set => ({
    data: system.player,
    buyProducer: producer => 
        set(state => {
            const [newProducers, newResources] = buyProducerSystem(createSystemObject(state.data), producer)
            state.data.producers = newProducers
            state.data.resources = newResources
        }),
    buyUpgrade: upgrade => {
        set(state => {
            const [newUpgrades, newResources] = buyUpgradeSystem(createSystemObject(state.data), upgrade)
            state.data.boughtUpgrades = newUpgrades
            state.data.resources = newResources
        })
    },
    increaseResource: (resource, amount) => {
        set(state => {
            state.data.resources[resource] += amount
        })
    },
    decreaseResource: (resource, amount) => {
        set(state => {
            state.data.resources[resource] -= amount
        })
    },
    addUnlockedUpgrades: upgrades => {
        set(state => {
            state.data.unlockedUpgrades = state.data.unlockedUpgrades.concat(upgrades)
        })        
    },
    addAchievements: achievements => {
        set(state => {
            state.data.achievements = state.data.achievements.concat(achievements)
        })
    },
})))