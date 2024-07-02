import { UpgradeExtended } from "../../system/types"
import { makeCost, makeEffect } from "../util"

const img = (name: string) =>  new URL( `../../images/upgrades/clubber/${name}.png`, import.meta.url).href


export const upgrades = {
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
        img: img('1'),
    },
    ironClubs: {
        isUnlocked: (system) => system.player.producers.clubber >= 1,
        cost: makeCost({}),
        effect: makeEffect({clubber: 10}),
        name: "Iron Clubs",
        description: "Wood is old school.",
        img: img('2'),
    },
    titaniumClubs: {
        isUnlocked: (system) => system.player.producers.clubber >= 1,
        cost: makeCost({}),
        effect: makeEffect({clubber: 10}),
        name: "Titanium Clubs",
        description: "Heavier, but actually does damage.",
        img: img('3'),
    },
    spikedClubs: {
        isUnlocked: (system) => system.player.producers.clubber >= 1,
        cost: makeCost({}),
        effect: makeEffect({clubber: 10}),
        name: "Spiked Clubs",
        description: "Titanium spikes, of course.",
        img: img('4'),
    },
} satisfies {[key: string]: UpgradeExtended}