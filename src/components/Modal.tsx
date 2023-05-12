import { Box, Dialog, DialogContent, DialogTitle, Divider, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Flags, removeCurrentFlag } from "../redux/appSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
//@ts-expect-error
import buildingsTabImg from "../images/buildingsTab.png"
//@ts-expect-error
import upgradesTabImg from "../images/upgradesTab.png";
//@ts-expect-error
import achievementsTabImg from "../images/achievementsTab.png"
import { MoneyIcon, BrickIcon } from "./Icons";

export const Modals: FC = () => {
    return (
        <>
        <Modal flag="destroyedWall0" title="Destroyed the Wall of A4 Printing Paper">
            <Typography>
                Congratulations you destroyed your first wall, which unlocked:
            </Typography>
            <Divider/>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <MoneyIcon size="large" style={{marginTop: "5px", marginRight: "5px"}}/>
                <Typography>
                    Money
                </Typography>
            </Box>
            <Typography>
                <i>~Pretty nice that you get paid just for attacking a wall~</i><br/>
                One of the main resources, used to buy the majority of things, make sure to produce a lot of this.
            </Typography>
            <Divider/>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <img src={buildingsTabImg} style={{marginRight: "5px"}}/>
                <Typography>
                    Buildings
                </Typography>
            </Box>
            <Typography>
                <i>~Time to get some help, this a not a task that you can finish by yourself~</i><br/>
                Buy producers that produce much needed resources, mostly damage and money. 
                They do this at different effiencies and rates, so make sure to check out the details of all the buildings.
            </Typography>
            
        </Modal>
        <Modal flag="destroyedWall1" title="Destroyed the Drywall">
            <Typography>
                Congratulations you destroyed the Drywall, now you're able to move on to the actual wall and you also unlocked: 
            </Typography>
            <Divider/>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <img src={upgradesTabImg} style={{marginRight: "5px"}}/>
                <Typography>
                    Upgrades
                </Typography>
            </Box>
            <Typography>
                <i>~The Realistic Upgrade Corporation opens its doors~</i><br/>
                Unlock and buy upgrades that improve the effiency and production of your producers.
            </Typography>
            
            <Divider/>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <img src={achievementsTabImg} style={{marginRight: "5px"}}/>
                <Typography>
                    Achievements
                </Typography>
            </Box>
            <Typography>
                <i>~You gotta have something to show off afterall~</i><br/>
                Mark your milestones
            </Typography>
        </Modal>
        </>
    )
}

// <Divider/>
// <Box sx={{display: "flex", alignItems: "center"}}>
//<BrickIcon size="large" style={{marginTop: "5px", marginRight: "5px"}}/>
//<Typography>Bricks</Typography>
//</Box>
//<Typography>
//<i>~These aren't ordinary bricks, they are Bricks™~</i><br/>
//Bricks are a rare but strong resource, they can't be produced and can only be gathered by destroying walls.
//</Typography> 


type Props = {
    flag: Flags
    title: string,
    children: any
}

const Modal: FC<Props> = ({flag, title, children}) => {
    const [open, setOpen] = useState(false)
    const flags = useAppSelector(s => s.appReducer.currentFlags)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(flags.indexOf(flag) !== -1) {
            setOpen(true)
            dispatch(removeCurrentFlag(flag))
        }
    }, [flags])

    return (
    <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth={true}
        maxWidth="sm"
    >
        <DialogTitle>
            {title}
        </DialogTitle>
        <DialogContent dividers>
            {children}
        </DialogContent>
    </Dialog>)
}