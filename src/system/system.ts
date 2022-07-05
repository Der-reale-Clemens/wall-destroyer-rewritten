import { AchievementsTrimmed, ProducersTrimmed, ResourcesTrimmed, SystemType } from "./types"
import { addResources, calculateProductions, calculateProductionsPerResource, calculateAchievements } from "./updateFunctions"
import { createObjectFromKeys } from "../util"

export const createSystem = (producers: ProducersTrimmed, resources: ResourcesTrimmed, achievements: AchievementsTrimmed): SystemType => {
    return {
        data: {
            producers,
            resources,
            achievements
        },
        player: {
            resources: createObjectFromKeys(resources, () => 0),
            producers: createObjectFromKeys(producers, () => 0),
            achievements: [],
        }
    }
}

export const update = (system: SystemType, deltaTime: number) => {
    const systemShallowClone = {...system}
    //Clone the player data so we don't modify the original
    const systemPlayerClone = JSON.parse(JSON.stringify(system.player)) as typeof system.player
    systemShallowClone.player = systemPlayerClone

    const productionsPerProducer = calculateProductions(system, deltaTime)
    const productionsPerResource = calculateProductionsPerResource(system, productionsPerProducer)

    systemShallowClone.player.resources = addResources(system, productionsPerResource)

    
    
    const unlockedAchievements = calculateAchievements(systemShallowClone)

    systemShallowClone.player.achievements = systemShallowClone.player.achievements.concat(unlockedAchievements)

    return systemShallowClone
}