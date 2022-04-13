import { BrickIcon, CosmicKnowledgeIcon, DamageIcon, MoneyIcon } from "../components/Icons"

export type Resources = keyof typeof resources

export const resources = {
    damage: {
        name: "Damage",
        extra: {
            backgroundColor: "rgb(253, 163, 17, 0.5)",
            icon: DamageIcon
        }
    },
    money: {
        name: "Money",
        extra: {
            backgroundColor: "rgb(17, 99, 0, 0.5)",
            icon: MoneyIcon
        }
    },
    bricks: {
        name: "Bricks",
        extra: {
            backgroundColor: "rgb(161, 58, 40, 0.5)",
            icon: BrickIcon
        }
    },
    cosmicKnowledge: {
        name: "Cosmic Knowledge",
        extra: {
            backgroundColor: "rgb(116, 91, 193, 0.5)",
            icon: CosmicKnowledgeIcon
        }
    }
}