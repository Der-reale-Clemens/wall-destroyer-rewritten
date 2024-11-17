import { upgrades as puncherUpgrades} from "../../data/upgrades/puncher"
import { upgrades as clubberUpgrades} from "../../data/upgrades/clubber"
import { upgrades as swordsmanUpgrades} from "../../data/upgrades/swordsman"
import { objectKeys} from "../../util"
import type { FC } from "react"
import type { Upgrades as UpgradesType } from "../../system/types"
import { SimpleTooltip } from "../util/Tooltip"
import { upgrades } from "../../data/upgrades"

export const Upgrades = () => {
    return (
        <table>
            <tbody>
            <tr>
                {objectKeys(puncherUpgrades).map(u => <td><Upgrade name={u}/></td>)}
            </tr>
            <tr>
                {objectKeys(clubberUpgrades).map(u => <td><Upgrade name={u}/></td>)}
            </tr>
            <tr>
                {objectKeys(swordsmanUpgrades).map(u => <td><Upgrade name={u}/></td>)}
            </tr>
            </tbody>
        </table>)
}

type Props = {
    name: keyof UpgradesType
}

const Upgrade: FC<Props> = ({name}) => {
    return <SimpleTooltip label={upgrades[name].name} description={upgrades[name].description}>
        <img src={upgrades[name].img}/>
    </SimpleTooltip>
}