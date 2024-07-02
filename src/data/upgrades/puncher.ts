import { UpgradeExtended } from "../../system/types"
import { makeCost, makeEffect } from "../util"

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
    steelPlatedGloves: {
        isUnlocked: (system) => system.player.producers.puncher >= 5,
        cost: makeCost({}),
        effect: makeEffect({puncher: 2}),
        name: "Steel Plated Gloves",
        description: "A brilliant plan.",
        img: img('3')
    },
    brassKnuckles: {
        isUnlocked: (system) => system.player.producers.puncher >= 5,
        cost: makeCost({}),
        effect: makeEffect({puncher: 2}),
        name: "Brass Knuckles",
        description: "That's on top of the steel plated gloves. Hell yes.",
        img: img('4')
    },
} satisfies {[key: string]: UpgradeExtended}