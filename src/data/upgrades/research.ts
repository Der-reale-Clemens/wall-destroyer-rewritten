import { UpgradeExtended } from "../../system/types";
import { makeEffect } from "../util";

const img = (name: string) =>  new URL( `../../images/upgrades/${name}.png`, import.meta.url).href

export const upgrades = {
    root: {
        isUnlocked: () => true,
        cost: {
            damage: 0,
            money: 1,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({}),
        name: 'Beginning',
        description: 'Gotta start somewhere',
        img: img('Beginning'),
    },
    magicMining: {
        isUnlocked: () => true,
        cost: {
            damage: 0,
            money: 0,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({puncher: 100}),
        name: 'Magic Mining',
        description: 'We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.',
        img: img('MagicMining'),
    },
    deepMagicMining: {
        isUnlocked: () => true,
        cost: {
            damage: 0,
            money: 1,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({puncher: 100}),
        name: 'Deep Magic Mining',
        description: 'The wizards are saying we shouldn\'t go this deep, but we found these cool dark magic tablets.',
        img: img('DeepMagicMining'),
    },
    darkMagicMining: {
        isUnlocked: () => true,
        cost: {
            damage: 0,
            money: 1,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({puncher: 100}),
        name: 'Dark Magic Mining',
        description: 'We need to mine into hell with dark magic so we can make a deal with the devil to destroy the wall. Everything about this plan is excellent.',
        img: img('DarkMagicMining'),
    },
    realityResearch: {
        isUnlocked: () => true,
        cost: {
            damage: 0,
            money: 1,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({puncher: 100}),
        name: 'Reality Research',
        description: 'We have discovered with the breaking of the 4th wall that we are all inside a stupid idle game. Not even a real game! But we can use this knowledge to our advantage...',
        img: img('RealityResearch'),
    },
    timeResearch: {
        isUnlocked: () => true,
        cost: {
            damage: 0,
            money: 1,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({puncher: 100}),
        name: 'Time Research',
        description: 'We can rewind time and keep our knowledge.',
        img: img('TimeResearch'),
    },
    blackResearch: {
        isUnlocked: () => true,
        cost: {
            damage: 0,
            money: 1,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({puncher: 100}),
        name: 'Black Research',
        description: 'We have discovered a substance in [REDACTED] that holds more power than anything we have ever encountered. We call it The Black because it is pitch black.',
        img: img('BlackResearch'),
    },
} satisfies {[key: string]: UpgradeExtended}