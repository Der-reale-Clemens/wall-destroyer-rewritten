import { makeCost, makeEffect } from "../util"

const img = (name: string) =>  new URL( `../../images/upgrades/grenademan/${name}.png`, import.meta.url).href

export const upgrades = {
    greasedPins: {
        isUnlocked: () => true,
        cost: makeCost({}),
        effect: makeEffect({}),
        name: 'Greased Pins',
        description: 'We received complaints... These guys aren\'t very good.',
        img: img('1'),
    },
    biggerCrates: {
        isUnlocked: () => true,
        cost: makeCost({}),
        effect: makeEffect({}),
        name: 'Bigger Crates',
        description: 'Less running to the store.',
        img: img('2'),
    },
}