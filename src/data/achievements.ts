import type { AchievementExtended } from "../system/types"
import { createObjectFromKeys } from "../util"

export const achievements = {
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
    },

    overnab1: {
        isUnlocked: (system) => system.player.resources.damage >= 1,
        name: "Overnab",
        description: "Damage the wall.",
        img: "http://i.imgur.com/OasIKlg.png",
    },
    scrub1: {
        isUnlocked: (system) => system.player.resources.damage >= 100,
        name: "Scrub",
        description: "Deal 100 Damage to the wall",
        img: "http://i.imgur.com/YU4cmkc.png"
    },
    lessScrub1: {
        isUnlocked: (system) => system.player.resources.damage >= 1000,
        name: "Less of a Scrub",
        description: "Deal 1000 Damage to the wall",
        img: "http://i.imgur.com/PIqpwX7.png"
    },
    wallTapper1: {
        isUnlocked: (system) => system.player.resources.damage >= 10_000,
        name: "Wall Tapper",
        description: "Deal 10,000 Damage to the wall",
        img: "http://i.imgur.com/aBSHBRg.png"
    },
    overnab2: {
        isUnlocked: (system) => system.player.resources.damage >= 1,
        name: "Overnab",
        description: "Damage the wall.",
        img: "http://i.imgur.com/OasIKlg.png",
    },
    scrub2: {
        isUnlocked: (system) => system.player.resources.damage >= 100,
        name: "Scrub",
        description: "Deal 100 Damage to the wall",
        img: "http://i.imgur.com/YU4cmkc.png"
    },
    lessScrub2: {
        isUnlocked: (system) => system.player.resources.damage >= 1000,
        name: "Less of a Scrub",
        description: "Deal 1000 Damage to the wall",
        img: "http://i.imgur.com/PIqpwX7.png"
    },
    wallTapper2: {
        isUnlocked: (system) => system.player.resources.damage >= 10_000,
        name: "Wall Tapper",
        description: "Deal 10,000 Damage to the wall",
        img: "http://i.imgur.com/aBSHBRg.png"
    },
    overnab3: {
        isUnlocked: (system) => system.player.resources.damage >= 1,
        name: "Overnab",
        description: "Damage the wall.",
        img: "http://i.imgur.com/OasIKlg.png",
    },
    scrub3: {
        isUnlocked: (system) => system.player.resources.damage >= 100,
        name: "Scrub",
        description: "Deal 100 Damage to the wall",
        img: "http://i.imgur.com/YU4cmkc.png"
    },
    lessScrub3: {
        isUnlocked: (system) => system.player.resources.damage >= 1000,
        name: "Less of a Scrub",
        description: "Deal 1000 Damage to the wall",
        img: "http://i.imgur.com/PIqpwX7.png"
    },
    wallTapper3: {
        isUnlocked: (system) => system.player.resources.damage >= 10_000,
        name: "Wall Tapper",
        description: "Deal 10,000 Damage to the wall",
        img: "http://i.imgur.com/aBSHBRg.png"
    },
    overnab4: {
        isUnlocked: (system) => system.player.resources.damage >= 1,
        name: "Overnab",
        description: "Damage the wall.",
        img: "http://i.imgur.com/OasIKlg.png",
    },
    scrub4: {
        isUnlocked: (system) => system.player.resources.damage >= 100,
        name: "Scrub",
        description: "Deal 100 Damage to the wall",
        img: "http://i.imgur.com/YU4cmkc.png"
    },
    lessScrub4: {
        isUnlocked: (system) => system.player.resources.damage >= 1000,
        name: "Less of a Scrub",
        description: "Deal 1000 Damage to the wall",
        img: "http://i.imgur.com/PIqpwX7.png"
    },
    wallTapper4: {
        isUnlocked: (system) => system.player.resources.damage >= 10_000,
        name: "Wall Tapper",
        description: "Deal 10,000 Damage to the wall",
        img: "http://i.imgur.com/aBSHBRg.png"
    },
    overnab5: {
        isUnlocked: (system) => system.player.resources.damage >= 1,
        name: "Overnab",
        description: "Damage the wall.",
        img: "http://i.imgur.com/OasIKlg.png",
    },
    scrub5: {
        isUnlocked: (system) => system.player.resources.damage >= 100,
        name: "Scrub",
        description: "Deal 100 Damage to the wall",
        img: "http://i.imgur.com/YU4cmkc.png"
    },
    lessScrub5: {
        isUnlocked: (system) => system.player.resources.damage >= 1000,
        name: "Less of a Scrub",
        description: "Deal 1000 Damage to the wall",
        img: "http://i.imgur.com/PIqpwX7.png"
    },
    wallTapper5: {
        isUnlocked: (system) => system.player.resources.damage >= 10_000,
        name: "Wall Tapper",
        description: "Deal 10,000 Damage to the wall",
        img: "http://i.imgur.com/aBSHBRg.png"
    },
    overnab6: {
        isUnlocked: (system) => system.player.resources.damage >= 1,
        name: "Overnab",
        description: "Damage the wall.",
        img: "http://i.imgur.com/OasIKlg.png",
    },
    scrub6: {
        isUnlocked: (system) => system.player.resources.damage >= 100,
        name: "Scrub",
        description: "Deal 100 Damage to the wall",
        img: "http://i.imgur.com/YU4cmkc.png"
    },
    lessScrub6: {
        isUnlocked: (system) => system.player.resources.damage >= 1000,
        name: "Less of a Scrub",
        description: "Deal 1000 Damage to the wall",
        img: "http://i.imgur.com/PIqpwX7.png"
    },
    wallTapper6: {
        isUnlocked: (system) => system.player.resources.damage >= 10_000,
        name: "Wall Tapper",
        description: "Deal 10,000 Damage to the wall",
        img: "http://i.imgur.com/aBSHBRg.png"
    },
    overnab7: {
        isUnlocked: (system) => system.player.resources.damage >= 1,
        name: "Overnab",
        description: "Damage the wall.",
        img: "http://i.imgur.com/OasIKlg.png",
    },
    scrub7: {
        isUnlocked: (system) => system.player.resources.damage >= 100,
        name: "Scrub",
        description: "Deal 100 Damage to the wall",
        img: "http://i.imgur.com/YU4cmkc.png"
    },
    lessScrub7: {
        isUnlocked: (system) => system.player.resources.damage >= 1000,
        name: "Less of a Scrub",
        description: "Deal 1000 Damage to the wall",
        img: "http://i.imgur.com/PIqpwX7.png"
    },
    wallTapper7: {
        isUnlocked: (system) => system.player.resources.damage >= 10_000,
        name: "Wall Tapper",
        description: "Deal 10,000 Damage to the wall",
        img: "http://i.imgur.com/aBSHBRg.png"
    },
    overnab8: {
        isUnlocked: (system) => system.player.resources.damage >= 1,
        name: "Overnab",
        description: "Damage the wall.",
        img: "http://i.imgur.com/OasIKlg.png",
    },
    scrub8: {
        isUnlocked: (system) => system.player.resources.damage >= 100,
        name: "Scrub",
        description: "Deal 100 Damage to the wall",
        img: "http://i.imgur.com/YU4cmkc.png"
    },
    lessScrub8: {
        isUnlocked: (system) => system.player.resources.damage >= 1000,
        name: "Less of a Scrub",
        description: "Deal 1000 Damage to the wall",
        img: "http://i.imgur.com/PIqpwX7.png"
    },
    wallTapper8: {
        isUnlocked: (system) => system.player.resources.damage >= 10_000,
        name: "Wall Tapper",
        description: "Deal 10,000 Damage to the wall",
        img: "http://i.imgur.com/aBSHBRg.png"
    }
} satisfies {[key: string]: AchievementExtended}

export const achievementsTrimmed = createObjectFromKeys(achievements, a => ({
    isUnlocked: achievements[a].isUnlocked
}))