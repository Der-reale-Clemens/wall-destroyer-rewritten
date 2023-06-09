import { makeCost, makeEffect } from "../util"

const img = (name: string) =>  new URL( `../../images/upgrades/bulldozer/${name}.png`, import.meta.url).href

export const upgrades = {
    strongerBlades: {
        isUnlocked: () => true,
        cost: makeCost({}),
        effect: makeEffect({}),
        name: 'Stronger Blades',
        description: 'Probably made of titanium.',
        img: img('1'),
    },
    powerTreads: {
        isUnlocked: () => true,
        cost: makeCost({}),
        effect: makeEffect({}),
        name: 'Power Treads',
        description: 'Power Treads(TM), By the Realistic Upgrades Corporation(RUC).',
        img: img('2'),
    },
}