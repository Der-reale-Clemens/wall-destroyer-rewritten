import type { Resources, UpgradeEffect } from "../system/types"

export const makeEffect = (effect: Partial<UpgradeEffect>) => {
    const baseEffect = {
        puncher: 1,
        clubber: 1,
        swordsman: 1,
        gunshooter: 1,
        grenademan: 1,
        wreckingBall: 1,
        bulldozer: 1,
        airstrikeCaller: 1,
        blackObliterator: 1,
    }
    return () => ({...baseEffect, ...effect})
}

export const makeCost = (cost: Partial<Record<keyof Resources, number>>) => {
    const baseCost = {
        damage: 0,
        money: 0,
        bricks: 0,
        cosmicKnowledge: 0
    }
    return {
        ...baseCost, ...cost
    }
}