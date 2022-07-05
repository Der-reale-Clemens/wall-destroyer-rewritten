import { achievements, achievementsTrimmed } from "../data/achievements"
import { producers, producersTrimmed } from "../data/producers"
import { resources, resourcesTrimmed } from "../data/resources"
import { DamageIcon } from "../components/Icons"

export type Resources = typeof resources
export type ResourcesTrimmed = typeof resourcesTrimmed
export type Producers = typeof producers
export type ProducersTrimmed = typeof producersTrimmed
export type Achievements = typeof achievements
export type AchievementsTrimmed = typeof achievementsTrimmed



export type SystemType = {
    data: {
        producers: ProducersTrimmed
        resources: ResourcesTrimmed
        achievements: AchievementsTrimmed
    },
    player: {
        resources: Record<keyof ResourcesTrimmed, number>
        producers: Record<keyof ProducersTrimmed, number>
        achievements: Array<keyof AchievementsTrimmed>
    }
}

export type Resource = {
    name: string
}

export type Producer = {
    costScaling: number
    cost: Record<keyof Resources, number>
    production: Record<keyof Resources, number>
}

export type Achievement = {
    isUnlocked: (system: SystemType) => boolean
}

export type ResourceExtended = Resource & {
    backgroundColor: string,
    icon: typeof DamageIcon
}

export type ProducerExtended = Producer & {
    name: string,
    type: string,
    description: string
    img: string
}

export type AchievementExtended = Achievement & {
    name: string,
    description: string,
    img: string
}

export type Productions= Record<keyof Producers, Record<keyof Resources, number>>