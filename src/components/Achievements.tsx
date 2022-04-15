import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import { achievementsExtra } from "../data/mappings";
import { useAppSelector } from "../redux/hooks";
import { objectKeys } from "../util";
import { Pane } from "./Pane";

export const Achievements: FC = () => {
    const achievements = useAppSelector(s => s.systemReducer.player.achievements) as Array<keyof typeof achievementsExtra>
    const [current, setCurrent] = useState<keyof typeof achievementsExtra>()
    return (
        <Box sx={{display: "flex", flexDirection :"column", alignItems: "center"}}>
            <AchievementDisplay name={current}/>
            <Box sx={{display: "flex", width: "80vw", flexWrap: "wrap"}}>
                {achievements.map(a => <img src={achievementsExtra[a].img} style={{margin: "2px", cursor: "pointer"}} onClick={() => setCurrent(a)}/>)}
            </Box>
        </Box>)
}

type Props = {
    name: keyof typeof achievementsExtra | undefined
}

const AchievementDisplay: FC<Props> = ({name}) => {

    if(name === undefined) {
        return (
            <Pane style={{width: "20em", display: "flex", margin: "1em"}}>
                <img src={achievementsExtra.overnab.img} style={{padding: "0.5em", visibility: "hidden"}}/>
            </Pane>)
    }

    return (
        <Pane style={{width: "20em", display: "flex", margin: "1em"}}>
            <img src={achievementsExtra[name].img} style={{padding: "0.5em"}}/>
            <Box>
                <Typography variant="subtitle1">
                    {achievementsExtra[name].name}
                </Typography>
                <Typography variant="body2">
                    {achievementsExtra[name].description}
                </Typography>
            </Box>
        </Pane>)
}