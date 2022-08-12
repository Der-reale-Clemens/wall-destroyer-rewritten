import { Box, LinearProgress, Stack, Typography, useTheme} from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import { prettify } from "../functions";
import { BrickIcon, ImaginaryBrickIcon, MoneyIcon, DamageIcon} from "./Icons";
import { Pane } from "./Pane";
import { walls } from "../data/walls";

export const Resources: FC = () => {
    const damage = useAppSelector(s => s.systemReducer.resources.damage)
    const money = useAppSelector(s => s.systemReducer.resources.money)
    const bricks = useAppSelector(s => s.systemReducer.resources.bricks)
    const resourcesPerSecond = useAppSelector(s => s.systemAdditionsReducer.resourcesPerSecond)

    return (
        <Pane>
            <Stack direction="row" spacing={4} sx={{marginBottom: "5px"}}>
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"center", width:"15vw", padding:"0px"}}>
                    <DamageIcon size="large"/>
                    <Box sx={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
                        <Typography variant="h6" sx={{marginBottom: "-10px"}}>
                            {prettify(damage)}
                        </Typography>
                        <Typography variant="body2">
                            (+{prettify(resourcesPerSecond.damage)}/s)
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"center", width:"15vw", padding:"0px"}}>
                    <MoneyIcon size="large"/>
                    <Box sx={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
                        <Typography variant="h6" sx={{marginBottom: "-10px"}}>
                            {prettify(money)}
                        </Typography>
                        <Typography variant="body2">
                            (+{prettify(resourcesPerSecond.money)}/s)
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"center", width:"15vw", margin:"0px"}}>
                    <BrickIcon size="large"/>
                    <Box sx={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
                        <Typography variant="h6" sx={{marginBottom: "-10px"}}>
                            {prettify(bricks)}
                        </Typography>
                        <Typography variant="body2">
                            (+{prettify(resourcesPerSecond.bricks)}/s)
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"center", width:"15vw", padding:"0px"}}>
                    <ImaginaryBrickIcon size="large"/>
                    <Box sx={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
                        <Typography variant="h6" sx={{marginBottom: "-10px"}}>
                            {prettify(10000)}
                        </Typography>
                        <Typography variant="body2">
                            (+10/s)
                        </Typography>
                    </Box>
                </Box>
            </Stack>
            <WallProgress/>
        </Pane>
    )
}

const WallProgress: FC = () => {
    const damage = useAppSelector(s => s.systemReducer.resources.damage)
    const wall = useAppSelector(s => s.systemAdditionsReducer.wall)
    
    const wallProgress = (damage/walls[wall].requirement) * 100 >= 100 ? 100 : (damage/walls[wall].requirement) * 100

    return (
        <Box sx={{width: "100%"}}>
            <LinearProgress variant="determinate" value={wallProgress}/>
        </Box>)
}