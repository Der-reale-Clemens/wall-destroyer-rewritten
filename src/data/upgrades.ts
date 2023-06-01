import { UpgradeEffect, UpgradeExtended } from '../system/types';
import { createObjectFromKeys } from '../util';

const img = (name: string) =>  new URL( `../images/upgrades/${name}.png`, import.meta.url).href
const asType = <T extends {[key: string]: UpgradeExtended}>(arg: T): T => arg;

const makeEffect = (effect: Partial<UpgradeEffect>) => {
    const baseEffect = {
        puncher: 1,
        clubber: 1,
        swordsman: 1,
        gunshooter: 1,
        blackObliterator: 1,
    }
    return () => ({...baseEffect, ...effect})
}

export const upgrades = asType({
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
    gloves: {
        isUnlocked: (system) => system.player.producers.puncher >= 1,
        cost: {
            damage: 0,
            money: 100,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({puncher: 10}),
        name: "Gloves",
        description: "A little padding",
        img: img('puncher/1'),
    },
    paddedGloves: {
        isUnlocked: (system) => system.player.producers.puncher >= 5,
        cost: {
            damage: 0,
            money: 400,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({puncher: 2}),
        name: "Padded Gloves",
        description: "Actually significant padding",
        img: img('puncher/2')
    },
    betterClubs: {
        isUnlocked: (system) => system.player.producers.clubber >= 1,
        cost: {
            damage: 0,
            money: 100,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({clubber: 10}),
        name: "Better Clubs",
        description: "Simply feels better to hold.",
        img: img('clubber/1'),
    }
})

export const connections = {
    root: [],
    magicMining: ['root'],
    deepMagicMining: ['magicMining'],
    darkMagicMining: ['deepMagicMining'],
    realityResearch: ['darkMagicMining'],
    timeResearch: ['realityResearch'],
    blackResearch: ['realityResearch', 'timeResearch'],
    gloves: ['root'],
    paddedGloves: ['gloves'],
    betterClubs: ['root']
}

//Positions of where the upgrades should be displayed in the upgrade tree
//One unit is the size of one upgrade image
//Uses mathematical y-axis
export const positions = {
    root: [0,0],
    magicMining: [0,1],
    deepMagicMining: [0, 2],
    darkMagicMining: [0, 3],
    realityResearch: [0.5, 4],
    timeResearch: [-0.5, 4],
    blackResearch: [0,5],
    gloves: [-1, 0],
    paddedGloves: [-2, 0],
    betterClubs: [1, 0]
}

export const upgradesTrimmed = createObjectFromKeys(upgrades, u => ({
    isUnlocked: upgrades[u].isUnlocked,
    cost: upgrades[u].cost,
    effect: upgrades[u].effect
}))