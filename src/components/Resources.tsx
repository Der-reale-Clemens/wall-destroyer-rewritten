import { Box, Stack, useTheme} from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import moneyImg from "../images/money.png"
import brickImg from "../images/brick.png"
import imaginaryImg from "../images/imaginaryBrick.png"
import { prettify } from "../functions";

export const Resources: FC = () => {
    const theme = useTheme()
    const money = useAppSelector(s => s.systemReducer.player.resources.money)
    const bricks = useAppSelector(s => s.systemReducer.player.resources.bricks)

    const style = {
        background: theme.extra.resourceBackgroundColor,
        marginBottom:1, 
        borderRadius:"5px",
        border:"1px",
        borderStyle:"solid",
        borderColor: theme.extra.resourceBorderColor,
        width: "50vw",
    }

    return (
        <Box sx={{justifyContent: "center", alignItems: "center", display:"flex"}}>
            <Stack direction="row" spacing={4} sx={style}>
                <Box sx={{display: "flex", alignItems:"center", width:"15vw", padding:"0px"}}>
                    <img src={moneyImg} style={{width: "36px", height:"36px", margin: "3px"}}/>
                    {prettify(money)}
                </Box>
                <Box sx={{display: "flex", alignItems:"center", width:"15vw", margin:"0px"}}>
                    <img src={brickImg}/>
                    {bricks}
                </Box>
                <Box sx={{display: "flex", alignItems:"center", width:"15vw", padding:"0px"}}>
                    <img src={imaginaryImg}/>
                    1000
                </Box>
            </Stack>
        </Box>
    )
}