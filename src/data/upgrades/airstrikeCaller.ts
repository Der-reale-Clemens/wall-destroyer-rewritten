import { makeCost, makeEffect } from "../util"

const img = (name: string) =>  new URL( `../../images/upgrades/airstrikeCaller/${name}.png`, import.meta.url).href

export const upgrades = {
    fasterCommunications: {
        isUnlocked: () => true,
        cost: makeCost({}),
        effect: makeEffect({}),
        name: 'Faster Communications',
        description: 'Upgrading from dial-up.',
        img: img('1'),
    },
    pianos: {
        isUnlocked: () => true,
        cost: makeCost({}),
        effect: makeEffect({}),
        name: 'Pianos',
        description: 'What, did you think we were dropping missiles?',
        img: img('2'),
    },
}