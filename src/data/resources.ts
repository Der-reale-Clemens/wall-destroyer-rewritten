import { Resources } from "idle-game-creation-library"
import { BrickIcon, CosmicKnowledgeIcon, DamageIcon, MoneyIcon } from "../components/Icons"
import { createObjectFromKeys } from "../util"

type ResourcesExtra = {
    [Property in keyof typeof resources]:
        Resources[Property] & {
            backgroundColor: "rgb(253, 163, 17, 0.5)",
            icon: typeof DamageIcon
        }
}


export const resources = {
    damage: {
        name: "Damage",
        backgroundColor: "rgb(253, 163, 17, 0.5)",
        icon: DamageIcon
    },
    money: {
        name: "Money",
        backgroundColor: "rgb(17, 99, 0, 0.5)",
        icon: MoneyIcon
    },
    bricks: {
        name: "Bricks",
        backgroundColor: "rgb(161, 58, 40, 0.5)",
        icon: BrickIcon
    },
    cosmicKnowledge: {
        name: "Cosmic Knowledge",
        backgroundColor: "rgb(116, 91, 193, 0.5)",
        icon: CosmicKnowledgeIcon
    }
}

export const resourcesTrimmed = createObjectFromKeys(resources, r => ({
    name: resources[r].name
}))