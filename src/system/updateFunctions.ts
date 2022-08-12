import { Achievements, Producers, Productions, Resources, SystemType, Upgrades } from "./types"
import { createObjectFromKeys, everyMatch, objectKeys, setDifference, sum } from "../util"

export const calculateProductions = (system: SystemType, deltaTime: number): Productions => {
    //Calculate the production of all resources of a single producer
    const oneProducer = (producer: keyof Producers) => {
        //Calculate the production of a single resource of a single producer
        const oneResource = (resource: keyof Resources) => {
            const amount = system.player.producers[producer]
            const production = system.data.producers[producer].production[resource]

            return amount * production * (deltaTime/1000)
        }
        return createObjectFromKeys(system.data.resources, oneResource)
    }
    return createObjectFromKeys(system.data.producers, oneProducer)
}

export const calculateProductionsWithUpgrades = (system: SystemType, productions: Productions): Productions => {
    const upgrades = system.player.boughtUpgrades;
    //Calculate all producer multipliers
    const producerMultiplier = (producer: keyof Producers) => 
        upgrades.reduce((acc, u) => acc * system.data.upgrades[u].effect()[producer], 1)
    const multipliers = createObjectFromKeys(system.data.producers, producerMultiplier)
    

    const applyMultipliersToProducer = (producer: keyof Productions) => 
        createObjectFromKeys(productions[producer], (r) => productions[producer][r] * multipliers[producer])

    return createObjectFromKeys(system.data.producers, applyMultipliersToProducer)
}

export const calculateProductionsPerResource = (system: SystemType, productions: Productions) => {
    const oneResource = (res: keyof Resources) => 
        sum(Object.values(createObjectFromKeys(system.data.producers, (prod) => 
            productions[prod][res]
        )))
    return createObjectFromKeys(system.data.resources, oneResource)
}

export const addResources = (system: SystemType, productions: Record<keyof Resources, number>) => 
    createObjectFromKeys(system.player.resources, r => system.player.resources[r] + productions[r])

export const buyProducer = (system: SystemType, producer: keyof Producers)
    : [Record<keyof Producers, number>, Record<keyof Resources, number>] => {
    const costs = system.data.producers[producer].cost
    const resources = system.player.resources

    const calcCost = (resource: keyof typeof costs) => {
        const producerAmount = system.player.producers[producer]
        const producerScaling = system.data.producers[producer].costScaling

        return costs[resource]*Math.pow(producerScaling,producerAmount)
    }
    const canBuy = () => 
        everyMatch(objectKeys(resources), r => resources[r] >= calcCost(r))

    if(!canBuy()) {
        return [system.player.producers, resources];
    }

    const newResources: Record<keyof Resources, number> = 
        objectKeys(costs).reduce((acc: any, cur) => ({...acc, [cur]: resources[cur]-calcCost(cur)}), {})
    //Create a copy to edit
    const newProducers = {...system.player.producers}
    newProducers[producer] += 1
    return [newProducers, newResources];
}

export const calculateUnlockedUpgrades = (system: SystemType): Array<keyof Upgrades> => {
    const data = objectKeys(system.data.upgrades)
    const player = system.player.unlockedUpgrades

    return setDifference(data, player)
        .filter(u => system.data.upgrades[u].isUnlocked(system))
}

export const buyUpgrade = (system: SystemType, upgrade: keyof Upgrades)
    : [Array<keyof Upgrades>, Record<keyof Resources, number>] => {
    const costs = system.data.upgrades[upgrade].cost
    const resources = system.player.resources

    const canBuy = () => 
        everyMatch(objectKeys(resources), r => resources[r] >= costs[r])

    if(!canBuy()) {
        return [system.player.boughtUpgrades, resources]
    }

    const newResources = objectKeys(costs).reduce((acc: any, cur) => ({...acc, [cur]: resources[cur]-costs[cur]}), {})
    const newUpgrades = system.player.boughtUpgrades.concat([upgrade])
    return [newUpgrades, newResources]
}

export const calculateAchievements = (system: SystemType): Array<keyof Achievements> => {
    const data = objectKeys(system.data.achievements)
    const player = system.player.achievements

    return setDifference(data, player)
        .filter(a => system.data.achievements[a].isUnlocked(system))
} 