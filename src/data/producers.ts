import type { ProducerExtended } from "../system/types"
import { createObjectFromKeys } from "../util"

const img = (name: string) =>  new URL( `../images/producers/${name}.png`, import.meta.url).href

const scaling = 1.2

export const producers = {
    puncher: {
        costScaling: scaling,
        cost: {
            money: 15,
        },
        production: {
            damage: 0.05,
            money: 1,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Puncher",
        type: "Meele",
        description: "Punches the wall for you.",
        img: img('Puncher')
    },
    clubber: {
        costScaling: scaling,
        cost: {
            money: 150,
        },
        production: {
            damage: 1,
            money: 5,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Clubber",
        type: "Meele",
        description: "Not to be confused with the other kind of clubbing.",
        img: img('Clubber')
    },
    swordsman: {
        costScaling: scaling,
        cost: {
            money: 1200,
        },
        production: {
            damage: 10,
            money: 25,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Swordsman",
        type: "Meele",
        description: "Some question the use of swords on a brick wall. Those guys are lame.",
        img: img('Swordsman')
    },
    gunshooter: {
        costScaling: scaling,
        cost: {
            money: 40_000,
        },
        production: {
            damage: 400,
            money: 600,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Gunshooter",
        type: "Ranged",
        description: "Shoots his gun.",
        img: img('Gunshooter')
    },
    grenademan: {
        costScaling: scaling,
        cost: {
            money: 800_000,
        },
        production: {
            damage: 10_000,
            money: 8_000,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Grenademan",
        type: "Ranged",
        description: "A man with grenades. I am a master of descriptions",
        img: img('Grenademan')
    },
    wreckingBall: {
        costScaling: scaling,
        cost: {
            money: 20_000_000,
        },
        production: {
            damage: 500_000,
            money: 180_000,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Wrecking Ball",
        type: "Heavy Duty",
        description: "Something actually meant for destroying walls.",
        img: img('WreckingBall')
    },
    bulldozer: {
        costScaling: scaling,
        cost: {
            money: 250_000_000,
        },
        production: {
            damage: 8_000_000,
            money: 2_000_000,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Bulldozer",
        type: "Heavy Duty",
        description: "Rams the wall. So good.",
        img: img('Bulldozer')
    },
    airstrikeCaller: {
        costScaling: scaling,
        cost: {
            money: 5_000_000_000,
        },
        production: {
            damage: 200_000_000,
            money: 30_000_000,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Airstrike Caller",
        type: "Heavy Duty",
        description: "You know, the guy that calls airstrikes.",
        img: img('AirstrikeCaller')
    },
    necromancer: {
        costScaling: scaling,
        cost: {
            money: 0,
        },
        production: {
            damage: 0,
            money: 0,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Necromancer",
        type: "Magic",
        description: "Raises dead wizards to destroy the wall with their dark magic",
        img: img("Necromancer")
    },
    titan: {
        costScaling: scaling,
        cost: {
            money: 0,
        },
        production: {
            damage: 0,
            money: 0,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Titan",
        type: "Magic",
        description: "We got the necromancers to raise ancient titans from the dead. They smash the wall with their giant fists.",
        img: img("Titan")
    },
    demon: {
        costScaling: scaling,
        cost: {
            money: 0,
        },
        production: {
            damage: 0,
            money: 0,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Demon",
        type: "Magic",
        description: "Defiles the wall with the darkest magic of all.",
        img: img("Demon")
    },
    realityCompromiser: {
        costScaling: scaling,
        cost: {
            money: 0,
        },
        production: {
            damage: 0,
            money: 0,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Reality Compromiser",
        type: "Dream",
        description: "Enters reality code and removes the wall from existence.",
        img: img("RealityCompromiser")
    },
    blackObliterator: {
        costScaling: scaling,
        cost: {
            damage: 1,
            money: 100,
            bricks: 1,
            cosmicKnowledge: 1
        },
        production: {
            damage: 1e8,
            money: 1e8,
            bricks: 10,
            cosmicKnowledge: 0
        },
        name: "Black Obliterator",
        type: "Dream",
        description: "Robots covered in The Black. They're really cool, so no one questions mixing the most dangerous & evil thing ever with cold, unfeeling robots.",
        img: img("BlackObliterator")
    },
    brickFactory: {
        costScaling: scaling,
        cost: {
            money: 0,
        },
        production: {
            damage: 0,
            money: 0,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Brick Factory",
        type: "Special",
        description: "Creates artificial bricks with dark magic. The wizards will never know.",
        img: img("BrickFactory")
    },
} satisfies {[key: string]: ProducerExtended}

export const producersTrimmed = createObjectFromKeys(producers, p => ({
    costScaling: producers[p].costScaling,
    cost: producers[p].cost,
    production: producers[p].production
}))