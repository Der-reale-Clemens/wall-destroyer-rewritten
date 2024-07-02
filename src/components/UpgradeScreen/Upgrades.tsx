import { upgrades as puncherUpgrades} from "../../data/upgrades/puncher"
import { upgrades as clubberUpgrades} from "../../data/upgrades/clubber"
import { upgrades as swordsmanUpgrades} from "../../data/upgrades/swordsman"
import { objectEntries} from "../../util"

export const Upgrades = () => {
    return (
        <table>
            <tbody>
            <tr>
                {objectEntries(puncherUpgrades).map(([n, v]) => <td><img src={v.img}/></td>)}
            </tr>
            <tr>
                {objectEntries(clubberUpgrades).map(([n, v]) => <td><img src={v.img}/></td>)}
            </tr>
            <tr>
                {objectEntries(swordsmanUpgrades).map(([n, v]) => <td><img src={v.img}/></td>)}
            </tr>
            </tbody>
        </table>
    )
}