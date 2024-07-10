//@ts-ignore
import * as swarmNumberformat from "swarm-numberformat"
import { useAppStore } from "./store/store";
import { createSystemObject, useSystemStore } from "./store/systemStore";
import { calculateProductions, calculateProductionsWithUpgrades, calculateProductionsPerResource, calculateNewAchievements } from "./system/updateFunctions";

const DEBUG = true

export const update = () => {
    const appState = useAppStore.getState()
    const systemState = useSystemStore.getState().data
    //Calculate passed time
    const currentTime = new Date().getTime()
    const oldTime = appState.lastUpdate
    const deltaTime = (currentTime - oldTime) * (DEBUG ? 10 : 1)

    const productionsFull = calculateProductions(createSystemObject(systemState), deltaTime)
    const productionsWithUpgrades = calculateProductionsWithUpgrades(createSystemObject(systemState), productionsFull)
    const productions = calculateProductionsPerResource(createSystemObject(systemState), productionsWithUpgrades)

    useSystemStore.getState().increaseResource("damage", productions.damage)
    useSystemStore.getState().increaseResource("money", productions.money)
    useSystemStore.getState().increaseResource("bricks", productions.bricks)

    const newAchievements = calculateNewAchievements(createSystemObject(systemState))
    useSystemStore.getState().addAchievements(newAchievements)
}

export const prettify = (num: number): string => {
    if (num <= 100) {
        return (Math.round(num * 1000) / 1000).toString();
    }
    const format = useAppStore.getState().format
    return swarmNumberformat.numberformat.format(num, {format, sigfigs: 4, flavor: "short"});
}