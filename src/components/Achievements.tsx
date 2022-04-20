import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import { achievements } from "../data/achievements";
import { useAppSelector } from "../redux/hooks";
import { Pane } from "./Pane";

export const Achievements: FC = () => {
    const achievementsUnlocked = useAppSelector(s => s.systemReducer.player.achievements) as Array<keyof typeof achievements>
    const [current, setCurrent] = useState<keyof typeof achievements>()
    return (
        <Box sx={{display: "flex", flexDirection :"column", alignItems: "center"}}>
            <AchievementDisplay name={current}/>
            <Box sx={{display: "flex", width: "80vw", flexWrap: "wrap"}}>
                {achievementsUnlocked.map(a => <img src={achievements[a].img} style={{margin: "2px", cursor: "pointer"}} onClick={() => setCurrent(a)}/>)}
            </Box>
        </Box>)
}

type Props = {
    name: keyof typeof achievements | undefined
}

const AchievementDisplay: FC<Props> = ({name}) => {

    if(name === undefined) {
        return (
            <Pane style={{width: "20em", display: "flex", margin: "1em"}}>
                <img src={achievements.overnab.img} style={{padding: "0.5em", visibility: "hidden"}}/>
            </Pane>)
    }

    return (
        <Pane style={{width: "20em", display: "flex", margin: "1em"}}>
            <img src={achievements[name].img} style={{padding: "0.5em"}}/>
            <Box>
                <Typography variant="subtitle1">
                    {achievements[name].name}
                </Typography>
                <Typography variant="body2">
                    {achievements[name].description}
                </Typography>
            </Box>
        </Pane>)
}