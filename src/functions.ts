import { calculateProductions, calculateProductionsPerResource } from "idle-game-creation-library"
import { setLastUpdate } from "./redux/appSlice"
import { AppDispatch, store } from "./redux/store"
import { increaseResource } from "./redux/systemSlice"


const numberformat = require("swarm-numberformat")

export const update = (dispatch: AppDispatch) => {
    const state = store.getState()
    //Calculate passed time
    const currentTime = new Date().getTime()
    const oldTime = state.appReducer.lastUpdate
    const deltaTime = currentTime - oldTime
    dispatch(setLastUpdate(currentTime))

    const productionsFull = calculateProductions(state.systemReducer, deltaTime)
    const productions = calculateProductionsPerResource(state.systemReducer, productionsFull)

    dispatch(increaseResource(["money", productions.money]))
    dispatch(increaseResource(["bricks", productions.bricks]))
    
}

export const prettify = (num: number): string => {
    if (num <= 100) {
        return (Math.round(num * 1000) / 1000).toString();
    }
    const format = store.getState().appReducer.format
    //const format = "standard";
    //return (Math.round(num*1000)/1000).toString();
    return numberformat.format(num, {format, sigfigs: 4});
}