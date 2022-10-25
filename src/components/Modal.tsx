import { Box, Dialog, DialogContent, DialogTitle, Divider, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Flags, removeCurrentFlag } from "../redux/appSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
//@ts-expect-error
import buildingsTabImg from "../images/buildingsTab.png"
//@ts-expect-error
import achievementsTabImg from "../images/achievementsTab.png"
import { MoneyIcon } from "./Icons";

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
                One of the main resources, used to buy the majority of things. Be sure to produce a lot of this
            </Typography>
            <Divider/>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <img src={buildingsTabImg} style={{marginRight: "5px"}}/>
                <Typography>
                    Buildings
                </Typography>
            </Box>
            <Typography>
                They are buyable producers that produce much needed resources, mostly damage and money. 
                They do this at different effiencies and rates, so make sure to check out the details of the buildings
            </Typography>
            <Divider/>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <img src={achievementsTabImg} style={{marginRight: "5px"}}/>
                <Typography>
                    Achievements
                </Typography>
            </Box>
            <Typography>
                Mark your milestones
            </Typography>
        </Modal>
        <Modal flag="destroyedWall1" title="Destroyed the Drywall">
            <Typography>
                Good Job
            </Typography>
        </Modal>
        </>
    )
}


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