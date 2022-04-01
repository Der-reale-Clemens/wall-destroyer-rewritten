import { FC } from "react";
import { Buildings } from "./Buildings";
import { Settings } from "./Settings";
import { Wall } from "./Wall";

type Props = {
    panel: 0|1|2|3|4|5
}

export const Panels: FC<Props> = ({panel}) => {
    switch(panel) {
        case 0: return <Wall/>
        case 1: return <Buildings/>
        case 2: return null
        case 3: return null
        case 4: return null
        case 5: return <Settings/>
    }
    
    
}