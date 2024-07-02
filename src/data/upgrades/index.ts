import { UpgradeExtended, Upgrades } from '../../system/types';
import { createObjectFromKeys } from '../../util';
import * as research from './research';
import * as puncher from './puncher';
import * as clubber from './clubber';
import * as swordsman from './swordsman';
import * as gunshooter from './gunshooter';
import * as grenademan from './grenademan'
import * as wreckingBall from './wreckingBall'
import * as bulldozer from './bulldozer'
import * as airstrikeCaller from './airstrikeCaller'

export const upgrades = {
    ...research.upgrades,

    ...puncher.upgrades,
    ...clubber.upgrades,
    ...swordsman.upgrades,
    ...gunshooter.upgrades,
    ...grenademan.upgrades,
    ...wreckingBall.upgrades,
    ...bulldozer.upgrades,
    ...airstrikeCaller.upgrades
} satisfies {[key: string]: UpgradeExtended}

export const connections: Record<keyof Upgrades, Array<keyof Upgrades>> = {
    root: [],

    magicMining: ['root'],
    deepMagicMining: ['magicMining'],
    darkMagicMining: ['deepMagicMining'],
    realityResearch: ['darkMagicMining'],
    timeResearch: ['realityResearch'],
    blackResearch: ['realityResearch', 'timeResearch'],

    gloves: ['root'],
    paddedGloves: ['gloves'],
    steelPlatedGloves: ['paddedGloves'],
    brassKnuckles: ['steelPlatedGloves'],

    betterClubs: ['root'],
    ironClubs: ['betterClubs'],
    titaniumClubs: ['ironClubs'],
    spikedClubs: ['titaniumClubs'],

    sharpening: ['root'],
    biggerSwords: ['sharpening'],

    laserSights: ['root'],
    doubleMagazines: ['laserSights'],

    greasedPins: ['root'],
    biggerCrates: ['greasedPins'],

    biggerBalls: ['root'],
    ballsOfSteel: ['biggerBalls'],

    strongerBlades: ['root'],
    powerTreads: ['strongerBlades'],

    fasterCommunications: ['root'],
    pianos: ['fasterCommunications']
}

//Positions of where the upgrades should be displayed in the upgrade tree
//One unit is the size of one upgrade image
//Uses mathematical y-axis
export const positions: Record<keyof Upgrades, [number, number]> = {
    root: [2.5,1],

    magicMining: [2.5,2],
    deepMagicMining: [7, -1],
    darkMagicMining: [0, 3],
    realityResearch: [0.5, 4],
    timeResearch: [-0.5, 4],
    blackResearch: [0,5],

    gloves: [-1, -1],
    paddedGloves: [-1, -2],
    steelPlatedGloves: [-1, -3],
    brassKnuckles: [-1, -4],

    betterClubs: [0, -1],
    ironClubs: [0, -2],
    titaniumClubs: [0, -3],
    spikedClubs: [0, -4],

    sharpening: [1, -1],
    biggerSwords: [1, -2],

    laserSights: [2, -1],
    doubleMagazines: [2, -2],

    greasedPins: [3, -1],
    biggerCrates: [3, -2],

    biggerBalls: [4, -1],
    ballsOfSteel: [4, -2],

    strongerBlades: [5, -1],
    powerTreads: [5, -2],

    fasterCommunications: [6, -1],
    pianos: [6, -2]
}

export const upgradesTrimmed = createObjectFromKeys(upgrades, u => ({
    isUnlocked: upgrades[u].isUnlocked,
    cost: upgrades[u].cost,
    effect: upgrades[u].effect
}))