import type { UpgradeExtended } from "../../system/types"
import { makeCost, makeEffect } from "../util"

const img = (name: string) =>  new URL( `../../images/upgrades/swordsman/${name}.png`, import.meta.url).href

export const upgrades = {
    sharpening: {
        isUnlocked: (system) => system.player.producers.swordsman >= 1,
        cost: makeCost({money: 10}),
        effect: makeEffect({swordsman: 10}),
        name: 'Sharpening',
        description: 'Kind of useless in the long term of wall-slicing.',
        img: img('1'),
    },
    biggerSwords: {
        isUnlocked: (system) => system.player.producers.swordsman >= 5,
        cost: makeCost({money: 10}),
        effect: makeEffect({swordsman: 10}),
        name: 'Bigger Swords',
        description: 'Bigger is better!',
        img: img('2'),
    },
} satisfies {[key: string]: UpgradeExtended}