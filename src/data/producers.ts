import type { ProducerExtended } from "../system/types"
import { createObjectFromKeys } from "../util"

const img = (name: string) =>  new URL( `../images/producers/${name}.png`, import.meta.url).href

const scaling = 1.2

export const producers = {
    puncher: {
        costScaling: scaling,
        cost: {
            damage: 0,
            money: 15,
            bricks: 0,
            cosmicKnowledge: 0
        },
        production: {
            damage: 10_000.05,
            money: 1,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Puncher",
        type: "Meele",
        description: "Punches the wall for you",
        img: img('Puncher')
    },
    clubber: {
        costScaling: scaling,
        cost: {
            damage: 0,
            money: 150,
            bricks: 0,
            cosmicKnowledge: 0
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
            damage: 0,
            money: 1200,
            bricks: 0,
            cosmicKnowledge: 0
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
            damage: 0,
            money: 40_000,
            bricks: 0,
            cosmicKnowledge: 0
        },
        production: {
            damage: 400,
            money: 600,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Gunshooter",
        type: "Meele",
        description: "Shoots his gun",
        img: img('Gunshooter')
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
        img: "http://i.imgur.com/mSWDezW.png"
    }
} satisfies {[key: string]: ProducerExtended}

export const producersTrimmed = createObjectFromKeys(producers, p => ({
    costScaling: producers[p].costScaling,
    cost: producers[p].cost,
    production: producers[p].production
}))