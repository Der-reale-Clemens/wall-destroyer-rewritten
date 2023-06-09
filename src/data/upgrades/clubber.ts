import { UpgradeExtended } from "../../system/types"
import { makeEffect } from "../util"

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
} satisfies {[key: string]: UpgradeExtended}