import { resources } from "./resources"
//@ts-expect-error
import paperWallImg from "../images/paperWall.png"
//@ts-expect-error
import dryWallImg from "../images/dryWall.png"
//@ts-expect-error
import buildingsTabImg from "../images/buildingsTab.png"
//@ts-expect-error
import achievementsTabImg from "../images/achievementsTab.png"
//@ts-expect-error
import upgradesTabImg from "../images/upgradesTab.png"
//@ts-expect-error
import labTabImg from "../images/labTab.png"
//@ts-expect-error
import moneyImg from "../images/money.png"
//@ts-expect-error
import brickImg from "../images/brick.png"

type Wall = {
    requirement: number,
    reward: Record<keyof typeof resources, number>,
    unlocks: Array<string>
    name: string,
    description: string,
    img: string,
}

export const walls: Array<Wall> = [
    {
        requirement: 0.99999999999999,
        reward: {
            damage: 0,
            money: 15,
            bricks: 0,
            cosmicKnowledge: 0
        },
        unlocks: [buildingsTabImg, achievementsTabImg, moneyImg],
        name: "Wall of A4 Printing Paper",
        description: "I don't think this actually counts as a wall",
        img: paperWallImg
    },
    {
        requirement: 5,
        reward: {
            damage: 0,
            money: 1000,
            bricks: 1,
            cosmicKnowledge: 0
        },
        unlocks: [upgradesTabImg, brickImg],
        name: "Drywall",
        description: "I guess your name is Kyle now",
        img: dryWallImg
    },
    {
        requirement: 1e9,
        reward: {
            damage: 0,
            money: 2.5e8,
            bricks: 25,
            cosmicKnowledge: 1
        },
        unlocks: [labTabImg, "http://i.imgur.com/3C1bIXe.png", "http://i.imgur.com/zqNeRti.png", "http://i.imgur.com/93tCmIj.png"],
        name: "Wall",
        description: "Destroy the wall and move on to a bigger one",
        img: "https://i.imgur.com/KfG2xNP.png",
    },
    {
        requirement: 1e11,
        reward: {
            damage: 0,
            money: 2.5e10,
            bricks: 100,
            cosmicKnowledge: 1
        },
        unlocks: ["http://i.imgur.com/F4FwhJe.png", "http://i.imgur.com/3C1bIXe.png", "http://i.imgur.com/YYCAyYr.png"],
        name: "Big 2nd Wall",
        description: "Something feels off about this wall",
        img: "https://i.imgur.com/KfG2xNP.png",
    },
    {
        requirement: 1e13,
        reward: {
            damage: 0,
            money: 2.5e11,
            bricks: 10000,
            cosmicKnowledge: 0
        },
        unlocks: ["http://i.imgur.com/tHUohS4.png", "http://i.imgur.com/Z4p4G7T.png"],
        name: "Huge 3rd Wall",
        description: "Something feels off about this wall",
        img: "https://i.imgur.com/KfG2xNP.png",
    }
]


