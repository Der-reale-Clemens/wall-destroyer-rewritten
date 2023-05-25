import { FC } from "react";
import { Achievements } from "./AchievementsScreen/Achievements";
import { Buildings } from "./BuildingsScreen/Buildings";
import { Settings } from "./SettingsScreen/Settings";
import { Upgrades } from "./UpgradesScreen/Upgrades";
import { Wall } from "./WallScreen/Wall";
import { UpgradeTree } from "./UpgradesScreen/UpgradeTree";

export type PanelsProps = {
    panel: "wall" | "buildings" | "upgrades" | "lab" | "achievements" | "stats" | "settings"
}

export const Panels: FC<PanelsProps> = ({panel}) => {
    switch(panel) {
        case "wall": return <Wall/>
        case "buildings": return <Buildings/>
        case "upgrades": return <UpgradeTree/>
        case "lab": return null
        case "achievements": return <Achievements/>
        case "stats": return null
        case "settings": return <Settings/>
    }
    
    
}