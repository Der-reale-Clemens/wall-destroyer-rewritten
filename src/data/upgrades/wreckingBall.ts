import { makeCost, makeEffect } from "../util"

const img = (name: string) =>  new URL( `../../images/upgrades/wreckingBall/${name}.png`, import.meta.url).href

export const upgrades = {
    biggerBalls: {
        isUnlocked: () => true,
        cost: makeCost({}),
        effect: makeEffect({}),
        name: 'Bigger Balls',
        description: 'If you know what I mean.(I don\'t)',
        img: img('1'),
    },
    ballsOfSteel: {
        isUnlocked: () => true,
        cost: makeCost({}),
        effect: makeEffect({}),
        name: 'Balls of Steel',
        description: 'I\'m not sure what the previous ones were made out of.',
        img: img('2'),
    },
}