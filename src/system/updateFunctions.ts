import { Achievements, Producers, Productions, Resources, SystemType } from "./types"
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

export const calculateProductionsPerResource = (system: SystemType, productions: Productions) => {
    const oneResource = (res: keyof Resources) => 
        sum(Object.values(createObjectFromKeys(system.data.producers, (prod) => 
            productions[prod][res]
        )))
    return createObjectFromKeys(system.data.resources, oneResource)
}

export const addResources = (system: SystemType, productions: Record<keyof Resources, number>) => 
    createObjectFromKeys(system.player.resources, r => system.player.resources[r] + productions[r])


export const calculateAchievements = (system: SystemType): Array<keyof Achievements> => {
    const data = objectKeys(system.data.achievements)
    const player = system.player.achievements

    return setDifference(data, player)
        .filter(a => system.data.achievements[a].isUnlocked(system))
} 

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