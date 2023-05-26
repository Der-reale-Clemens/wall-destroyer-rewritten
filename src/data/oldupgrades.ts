import { UpgradeEffect, UpgradeExtended } from "../system/types";
import { createObjectFromKeys } from "../util";

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
        img: "http://i.imgur.com/uwEoJ22.png"
    },
    betterClubs: {
        isUnlocked: (system) => system.player.producers.clubber >= 1,
        cost: {
            damage: 0,
            money: 750,
            bricks: 0,
            cosmicKnowledge: 0
        },
        effect: makeEffect({clubber: 2}),
        name: "Better Clubs",
        description: "Simply feels better to hold",
        img: "http://i.imgur.com/k6W8MW9.png"
    }
})

export const upgradesTrimmed = createObjectFromKeys(upgrades, u => ({
    isUnlocked: upgrades[u].isUnlocked,
    cost: upgrades[u].cost,
    effect: upgrades[u].effect
}))