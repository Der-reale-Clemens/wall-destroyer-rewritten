import { useSystemStore } from "../../store/systemStore"
import { achievements } from "../../data/achievements"
import { Achievements as AchievementsType } from "../../system/types"
import { FC } from "react"
import { SimpleTooltip } from "../util/Tooltip"
import { Pane } from "../util/Pane"

export const Achievements = () => {
    const unlockedAchievements = useSystemStore(s => s.data.achievements)

    return <Pane style={{width: '50vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {unlockedAchievements.map(a => <Achievement key={a} name={a}/>)}
    </Pane>

    // return <div style={{display: 'flex', flexWrap: 'wrap', width: '50vw'}}>
    //     {unlockedAchievements.map(a => <Achievement key={a} name={a}/>)}
    // </div>
}

type Props = {
    name: keyof AchievementsType
}

const Achievement: FC<Props> = ({name}) => {

    return <SimpleTooltip label={achievements[name].name} description={achievements[name].description} color="dark.4">
        <img src={achievements[name].img}/>
    </SimpleTooltip>
}