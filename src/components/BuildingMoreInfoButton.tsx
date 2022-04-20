import { Dialog, DialogContent, DialogTitle, IconButton, Chip, Typography, Divider, Box } from "@mui/material";
import { FC, useState } from "react";
import { producers } from "../data/producers";
import { calculateBuildingCost } from "../functions";
import { useAppSelector } from "../redux/hooks";
import { objectKeys } from "../util";
import {InfoIcon } from "./Icons"
import { ResourceCard } from "./ResourceCard";

type Props = {name: keyof typeof producers}

export const BuildingMoreInfoButton: FC<Props> = ({name}) => {
    const [open, setOpen] = useState(false)
    const building = producers[name]
    const amount = useAppSelector(s => s.systemReducer.player.producers[name])

    return (
        <>
        <IconButton onClick={() => setOpen(true)}>
            <InfoIcon/>
        </IconButton>
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth={true}
            maxWidth="sm"
        >
            <DialogTitle>
                {building.name}
                <Chip label={building.type} size="small" variant="outlined" color="secondary" sx={{marginLeft: "10px"}}/>
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    {building.description}
                </Typography>
                <Typography>
                    Cost
                </Typography>
                <Divider/>
                <Box sx={{display: "flex"}}>
                    {objectKeys(producers[name].cost)
                        .filter(r => producers[name].cost[r] !== 0)
                        .map(r => <ResourceCard name={r} amount={calculateBuildingCost(name)[r]}/>)}
                </Box>
                <Typography>
                    Production(/s)
                </Typography>
                <Divider/>
                <Box sx={{display: "flex"}}>
                    <Box sx={{width: "50%"}}>
                        One {building.name}
                        <br/>
                        <Box sx={{display: "flex"}}>
                            {objectKeys(producers[name].production)
                                .filter(r => producers[name].production[r] !== 0)
                                .map(r => <ResourceCard name={r} amount={producers[name].production[r]}/>)}
                        </Box>
                    </Box>
                    <Box>
                        All {building.name}s
                        <br/>
                        <Box sx={{display: "flex"}}>
                            {objectKeys(producers[name].production)
                                .filter(r => producers[name].production[r] !== 0)
                                .map(r => <ResourceCard name={r} amount={producers[name].production[r] * amount}/>)}
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
        </>
    )
} 