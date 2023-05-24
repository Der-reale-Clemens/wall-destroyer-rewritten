import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import { prettify } from "../functions";
import { BrickIcon, ImaginaryBrickIcon, MoneyIcon, DamageIcon, UnknownIcon} from "./util/Icons";
import { Pane } from "./util/Pane";
import { walls } from "../data/walls";
import { LockedContent } from "./util/LockedContent";

export const Resources: FC = () => {
    const damage = useAppSelector(s => s.systemReducer.resources.damage)
    const money = useAppSelector(s => s.systemReducer.resources.money)
    const bricks = useAppSelector(s => s.systemReducer.resources.bricks)
    const wall = useAppSelector(s => s.systemAdditionsReducer.wall)
    const resourcesPerSecond = useAppSelector(s => s.systemAdditionsReducer.resourcesPerSecond)

    return (
        <Pane>
            <Stack direction="row" spacing={4} sx={{marginBottom: "5px"}}>
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"left", width:"15vw", padding:"0px", marginLeft: "10px"}}>
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
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"left", width:"15vw", padding:"0px"}}>
                    <LockedContent flag="destroyedWall0">
                        <MoneyIcon size="large"/>
                    </LockedContent>
                    <Box sx={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
                        <Typography variant="h6" sx={{marginBottom: "-10px"}}>
                            {prettify(money)}
                        </Typography>
                        <Typography variant="body2">
                            (+{prettify(resourcesPerSecond.money)}/s)
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"left", width:"15vw", margin:"0px"}}>
                    <LockedContent flag="destroyedWall1">
                        <BrickIcon size="large"/>
                    </LockedContent>
                    <Box sx={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
                        <Typography variant="h6" sx={{marginBottom: "-10px"}}>
                            {prettify(bricks)}
                        </Typography>
                        <Typography variant="body2">
                            (+{prettify(resourcesPerSecond.bricks)}/s)
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", alignItems:"center", justifyContent:"left", width:"15vw", padding:"0px"}}>
                    <LockedContent flag="destroyedWall3">
                        <ImaginaryBrickIcon size="large"/>
                    </LockedContent>
                    <Box sx={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
                        <Typography variant="h6" sx={{marginBottom: "-10px"}}>
                            {prettify(0)}
                        </Typography>
                        <Typography variant="body2">
                            (+0/s)
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