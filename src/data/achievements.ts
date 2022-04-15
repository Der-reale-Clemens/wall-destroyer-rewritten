import { Achievements } from "idle-game-creation-library";
import { producers } from "./producers";
import { resources } from "./resources";

export const achievements: Achievements<typeof producers, typeof resources> = {
    overnab: {
        isUnlocked: (system) => system.player.resources.damage >= 1,
    },
    scrub: {
        isUnlocked: (system) => system.player.resources.damage >= 100
    },
    lessScrub: {
        isUnlocked: (system) => system.player.resources.damage >= 1000
    },
    wallTapper: {
        isUnlocked: (system) => system.player.resources.damage >= 10_000
    }
}