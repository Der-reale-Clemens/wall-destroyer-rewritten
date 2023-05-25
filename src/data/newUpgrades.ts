//@ts-ignore
import MagicMining from '../images/upgrades/MagicMining.png'
//@ts-ignore
import DeepMagicMining from '../images/upgrades/DeepMagicMining.png'
import DarkMagicMining from '../images/upgrades/DarkMagicMining.png'
import RealityResearch from '../images/upgrades/RealityResearch.png'
import BlackResearch from '../images/upgrades/BlackResearch.png'
import TimeResearch from '../images/upgrades/TimeResearch.png'
import Beginning from '../images/upgrades/Beginning.png'
import BetterClubs from '../images/upgrades/BetterClubs.png'
import { UpgradeEffect, UpgradeExtended } from '../system/types';
import { createObjectFromKeys } from '../util';


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
            money: 0,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({}),
        name: 'Beginning',
        description: 'Gotta start somewhere',
        img: Beginning
    },
    magicMining: {
        isUnlocked: () => true,
        cost: {
            damage: 0,
            money: 1,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({puncher: 100}),
        name: 'Magic Mining',
        description: 'We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.',
        img: MagicMining
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
        description: 'We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.',
        img: DeepMagicMining
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
        description: 'We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.',
        img: DarkMagicMining
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
        description: 'We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.',
        img: RealityResearch
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
        description: 'We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.',
        img: TimeResearch
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
        description: 'We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.',
        img: BlackResearch
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
        img: "http://i.imgur.com/tzwF920.png"
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
        description: "A little padding",
        img: BetterClubs
    }
})

export const connections = {
    root: 'root',
    magicMining: 'root',
    deepMagicMining: 'magicMining',
    darkMagicMining: 'deepMagicMining',
    realityResearch: 'darkMagicMining',
    timeResearch: 'realityResearch',
    blackResearch: 'realityResearch',
    gloves: 'root',
    betterClubs: 'root'
}

export const upgradesTrimmed = createObjectFromKeys(upgrades, u => ({
    isUnlocked: upgrades[u].isUnlocked,
    cost: upgrades[u].cost,
    effect: upgrades[u].effect
}))