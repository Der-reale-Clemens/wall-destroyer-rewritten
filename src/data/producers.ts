import type { ProducerExtended } from "../system/types"
import { createObjectFromKeys } from "../util"

const asType = <T extends {[key: string]: ProducerExtended}>(arg: T): T =>arg;

export const producers = asType({
    puncher: {
        costScaling: 1.2,
        cost: {
            damage: 0,
            money: 10,
            bricks: 0,
            cosmicKnowledge: 0
        },
        production: {
            damage: 1,
            money: 0.2,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Puncher",
        type: "Meele",
        description: "Punches the wall for you",
        img: "http://i.imgur.com/amBI8wT.png"
    },
    clubber: {
        costScaling: 1.2,
        cost: {
            damage: 0,
            money: 50,
            bricks: 0,
            cosmicKnowledge: 0
        },
        production: {
            damage: 2,
            money: 1,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Clubber",
        type: "Meele",
        description: "Not to be confused with the other kind of clubbing.",
        img: "http://i.imgur.com/HVaisVj.png"
    },
    swordsman: {
        costScaling: 1.2,
        cost: {
            damage: 0,
            money: 400,
            bricks: 0,
            cosmicKnowledge: 0
        },
        production: {
            damage: 7.5,
            money: 5,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Swordsman",
        type: "Meele",
        description: "Some question the use of swords on a brick wall. Those guys are lame.",
        img: "http://i.imgur.com/aPQuEKp.png"
    },
    gunshooter: {
        costScaling: 1.2,
        cost: {
            damage: 0,
            money: 40,
            bricks: 0,
            cosmicKnowledge: 0
        },
        production: {
            damage: 70000.5,
            money: 5000,
            bricks: 10,
            cosmicKnowledge: 0
        },
        name: "Gunshooter",
        type: "Meele",
        description: "Shoots his gun",
        img: "http://i.imgur.com/gCp304H.png"
    },
    blackObliterator: {
        costScaling: 1.1,
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
})

export const producersTrimmed = createObjectFromKeys(producers, p => ({
    costScaling: producers[p].costScaling,
    cost: producers[p].cost,
    production: producers[p].production
}))