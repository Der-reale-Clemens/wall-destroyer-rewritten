import { achievements, achievementsTrimmed } from "../data/achievements"
import { producers, producersTrimmed } from "../data/producers"
import { resources, resourcesTrimmed } from "../data/resources"
import { DamageIcon } from "../components/util/Icons"
import { upgrades, upgradesTrimmed } from "../data/upgrades"

export type Resources = typeof resources
export type ResourcesTrimmed = typeof resourcesTrimmed
export type Producers = typeof producers
export type ProducersTrimmed = typeof producersTrimmed
export type Upgrades = typeof upgrades
export type UpgradesTrimmed = typeof upgradesTrimmed
export type Achievements = typeof achievements
export type AchievementsTrimmed = typeof achievementsTrimmed

export type UpgradeEffect = Record<keyof Producers, number>;


export type SystemType = {
    data: {
        resources: ResourcesTrimmed
        producers: ProducersTrimmed
        upgrades: UpgradesTrimmed
        achievements: AchievementsTrimmed
    },
    player: {
        resources: Record<keyof ResourcesTrimmed, number>
        producers: Record<keyof ProducersTrimmed, number>
        unlockedUpgrades: Array<keyof UpgradesTrimmed>
        boughtUpgrades: Array<keyof UpgradesTrimmed>
        achievements: Array<keyof AchievementsTrimmed>
    }
}

export type Resource = {
    name: string
}

export type Producer = {
    costScaling: number
    cost: Partial<Record<keyof Resources, number>>
    production: Record<keyof Resources, number>
}

export type Upgrade = {
    isUnlocked: (system: SystemType) => boolean
    cost: Record<keyof Resources, number>
    effect: () => UpgradeEffect
}

export type Achievement = {
    isUnlocked: (system: SystemType) => boolean
}

export type ResourceExtended = Resource & {
    icon: typeof DamageIcon
}

export type ProducerExtended = Producer & {
    name: string
    type: string
    description: string
    img: string
}

export type UpgradeExtended = Upgrade & {
    name: string
    description: string
    img: string,
}

export type AchievementExtended = Achievement & {
    name: string
    description: string
    img: string
}

export type Productions= Record<keyof Producers, Record<keyof Resources, number>>