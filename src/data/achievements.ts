import { Achievements } from "idle-game-creation-library"
import { createObjectFromKeys } from "../util"
import { producersTrimmed } from "./producers"
import { resourcesTrimmed } from "./resources"

type AchievementsExtra = {
    [Property in keyof Achievements<typeof producersTrimmed, typeof resourcesTrimmed>]: 
        Achievements<typeof producersTrimmed, typeof resourcesTrimmed>[Property] & {
            name: string,
            description: string,
            img: string
        }
}


export const achievements: AchievementsExtra = {
    overnab: {
        isUnlocked: (system) => system.player.resources.damage >= 1,
        name: "Overnab",
        description: "Damage the wall.",
        img: "http://i.imgur.com/OasIKlg.png",
    },
    scrub: {
        isUnlocked: (system) => system.player.resources.damage >= 100,
        name: "Scrub",
        description: "Deal 100 Damage to the wall",
        img: "http://i.imgur.com/YU4cmkc.png"
    },
    lessScrub: {
        isUnlocked: (system) => system.player.resources.damage >= 1000,
        name: "Less of a Scrub",
        description: "Deal 1000 Damage to the wall",
        img: "http://i.imgur.com/PIqpwX7.png"
    },
    wallTapper: {
        isUnlocked: (system) => system.player.resources.damage >= 10_000,
        name: "Wall Tapper",
        description: "Deal 10,000 Damage to the wall",
        img: "http://i.imgur.com/aBSHBRg.png"
    }
}

export const achievementsTrimmed = createObjectFromKeys(achievements, a => ({
    isUnlocked: achievements[a].isUnlocked
}))