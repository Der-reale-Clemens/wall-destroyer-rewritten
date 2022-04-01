import { Resources } from "./resources"

type Wall = {
    requirement: number,
    reward: Record<Resources, number>,
    unlocks: Array<string>
    name: string,
    description: string,
    img: string,
}

export const walls: Array<Wall> = [
    {
        requirement: 1e9,
        reward: {
            money: 2.5e8,
            bricks: 25
        },
        unlocks: ["http://i.imgur.com/3C1bIXe.png", "http://i.imgur.com/zqNeRti.png", "http://i.imgur.com/93tCmIj.png"],
        name: "Wall",
        description: "Something feels off about this wall",
        img: "https://i.imgur.com/KfG2xNP.png",
    },
    {
        requirement: 1e11,
        reward: {
            money: 2.5e10,
            bricks: 100
        },
        unlocks: ["http://i.imgur.com/F4FwhJe.png", "http://i.imgur.com/3C1bIXe.png", "http://i.imgur.com/YYCAyYr.png"],
        name: "Big 2nd Wall",
        description: "Something feels off about this wall",
        img: "https://i.imgur.com/KfG2xNP.png",
    },
    {
        requirement: 1e13,
        reward: {
            money: 2.5e11,
            bricks: 10000
        },
        unlocks: ["http://i.imgur.com/tHUohS4.png", "http://i.imgur.com/Z4p4G7T.png"],
        name: "Huge 3rd Wall",
        description: "Something feels off about this wall",
        img: "https://i.imgur.com/KfG2xNP.png",
    }
]


