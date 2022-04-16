import { FC } from "react";
import { Achievements } from "./Achievements";
import { Buildings } from "./Buildings";
import { Settings } from "./Settings";
import { Wall } from "./Wall";

export type PanelsProps = {
    panel: "wall" | "buildings" | "upgrades" | "lab" | "achievements" | "stats" | "settings"
}

export const Panels: FC<PanelsProps> = ({panel}) => {
    switch(panel) {
        case "wall": return <Wall/>
        case "buildings": return <Buildings/>
        case "upgrades": return null
        case "lab": return null
        case "achievements": return <Achievements/>
        case "stats": return null
        case "settings": return <Settings/>
    }
    
    
}