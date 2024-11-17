import type { AchievementsTrimmed, ProducersTrimmed, ResourcesTrimmed, SystemType, UpgradesTrimmed } from "./types"
import { addResources, calculateProductions, calculateProductionsPerResource, calculateNewAchievements } from "./updateFunctions"
import { createObjectFromKeys } from "../util"

export const createSystem = (producers: ProducersTrimmed, resources: ResourcesTrimmed, upgrades: UpgradesTrimmed, achievements: AchievementsTrimmed): SystemType => {
    return {
        data: {
            producers,
            resources,
            upgrades,
            achievements
        },
        player: {
            resources: createObjectFromKeys(resources, () => 0),
            producers: createObjectFromKeys(producers, () => 0),
            unlockedUpgrades: [],
            boughtUpgrades: [],
            achievements: [],
        }
    }
}

export const update = (system: SystemType, deltaTime: number) => {
    const systemShallowClone = {...system}
    //Clone the player data so we don't modify the original
    const systemPlayerClone = JSON.parse(JSON.stringify(system.player)) as SystemType["player"]
    systemShallowClone.player = systemPlayerClone

    const productionsPerProducer = calculateProductions(system, deltaTime)
    const productionsPerResource = calculateProductionsPerResource(system, productionsPerProducer)

    systemShallowClone.player.resources = addResources(system, productionsPerResource)

    
    
    const unlockedAchievements = calculateNewAchievements(systemShallowClone)

    systemShallowClone.player.achievements = systemShallowClone.player.achievements.concat(unlockedAchievements)

    return systemShallowClone
}