import { UpgradeExtended } from "../../system/types"
import { makeEffect } from "../util"

const img = (name: string) =>  new URL( `../../images/upgrades/puncher/${name}.png`, import.meta.url).href

export const upgrades = {
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
        img: img('1'),
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
        img: img('2')
    },
} satisfies {[key: string]: UpgradeExtended}