import { BrickIcon, CosmicKnowledgeIcon, DamageIcon, MoneyIcon } from "../components/util/Icons"
import { createObjectFromKeys } from "../util"
import type { ResourceExtended } from "../system/types"

export const resources = {
    damage: {
        name: "Damage",
        icon: DamageIcon
    },
    money: {
        name: "Money",
        icon: MoneyIcon
    },
    bricks: {
        name: "Bricks",
        icon: BrickIcon
    },
    cosmicKnowledge: {
        name: "Cosmic Knowledge",
        icon: CosmicKnowledgeIcon
    }
} satisfies {[key: string]: ResourceExtended}

export const resourcesTrimmed = createObjectFromKeys(resources, r => ({
    name: resources[r].name
}))