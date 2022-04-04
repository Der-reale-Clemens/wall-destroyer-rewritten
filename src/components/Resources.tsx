import { Box, LinearProgress, Stack, useTheme} from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import { prettify } from "../functions";
import { BrickIcon, ImaginaryBrickIcon, MoneyIcon, DamageIcon} from "./Icons";
import { Pane } from "./Pane";
import { walls } from "../data/walls";

export const Resources: FC = () => {
    const theme = useTheme()
    const damage = useAppSelector(s => s.systemReducer.player.resources.damage)
    const money = useAppSelector(s => s.systemReducer.player.resources.money)
    const bricks = useAppSelector(s => s.systemReducer.player.resources.bricks)

    return (
        <Pane>
            <Stack direction="row" spacing={4} sx={{marginBottom: "5px"}}>
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"center", width:"15vw", padding:"0px"}}>
                <DamageIcon size="medium"/>
                    {prettify(damage)}
                </Box>
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"center", width:"15vw", padding:"0px"}}>
                    <MoneyIcon size="medium"/>
                    {prettify(money)}
                </Box>
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"center", width:"15vw", margin:"0px"}}>
                    <BrickIcon size="medium"/>
                    {bricks}
                </Box>
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"center", width:"15vw", padding:"0px"}}>
                    <ImaginaryBrickIcon size="medium"/>
                    1000
                </Box>
            </Stack>
            <WallProgress/>
        </Pane>
    )
}

const WallProgress: FC = () => {
    const damage = useAppSelector(s => s.systemReducer.player.resources.damage)
    const wall = useAppSelector(s => s.systemAdditionsReducer.wall)
    
    const wallProgress = (damage/walls[wall].requirement) * 100 >= 100 ? 100 : (damage/walls[wall].requirement) * 100

    return (
        <Box sx={{width: "100%"}}>
            <LinearProgress variant="determinate" value={wallProgress}/>
        </Box>)
}