import type { UpgradeExtended } from "../../system/types"
import { makeCost, makeEffect } from "../util"

const img = (name: string) =>  new URL( `../../images/upgrades/gunshooter/${name}.png`, import.meta.url).href

export const upgrades = {
    laserSights: {
        isUnlocked: (system) => system.player.producers.gunshooter >= 1,
        cost: makeCost({money: 10}),
        effect: makeEffect({gunshooter: 10}),
        name: 'Laser Sights',
        description: 'You wouldn\'t think you\'d need these when your target is a brick wall, but the guys you hired are really bad at their job.',
        img: img('1'),
    },
    doubleMagazines: {
        isUnlocked: (system) => system.player.producers.gunshooter >= 5,
        cost: makeCost({money: 10}),
        effect: makeEffect({gunshooter: 10}),
        name: 'Double Magazines',
        description: 'Less pesky reloading.',
        img: img('2'),
    },
} satisfies {[key: string]: UpgradeExtended}