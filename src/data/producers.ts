import { Producers } from "idle-game-creation-library"
import { createObjectFromKeys } from "../util"
import { resourcesTrimmed } from "./resources"

type ProducersExtra = {
    [Property in keyof Producers<typeof resourcesTrimmed>]:
        Producers<typeof resourcesTrimmed>[Property] & {
            name: string,
            type: string,
            description: string
            img: string
        }
}

export const producers = {
    puncher: {
        costScaling: 1.1,
        cost: {
            damage: 0,
            money: 20,
            bricks: 0,
            cosmicKnowledge: 0
        },
        production: {
            damage: 0.1,
            money: 0.1,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Puncher",
        type: "Meele",
        description: "Punches the wall for you",
        img: "http://i.imgur.com/amBI8wT.png"
    },
    clubber: {
        costScaling: 1.1,
        cost: {
            damage: 0,
            money: 100,
            bricks: 0,
            cosmicKnowledge: 0
        },
        production: {
            damage: 1,
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
        costScaling: 1.1,
        cost: {
            damage: 0,
            money: 1100,
            bricks: 0,
            cosmicKnowledge: 0
        },
        production: {
            damage: 2.5,
            money: 2.5,
            bricks: 0,
            cosmicKnowledge: 0
        },
        name: "Swordsman",
        type: "Meele",
        description: "Some question the use of swords on a brick wall. Those guys are lame.",
        img: "http://i.imgur.com/aPQuEKp.png"
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
}

export const producersTrimmed = createObjectFromKeys(producers, p => ({
    costScaling: producers[p].costScaling,
    cost: producers[p].cost,
    production: producers[p].production
}))