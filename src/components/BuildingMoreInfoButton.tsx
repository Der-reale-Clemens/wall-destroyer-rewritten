import { Dialog, DialogContent, DialogTitle, IconButton, Chip, Typography, Divider, Box } from "@mui/material";
import { FC, useState } from "react";
import { producersExtra } from "../data/mappings";
import { producers } from "../data/producers";
import { useAppSelector } from "../redux/hooks";
import {InfoIcon} from "./Icons"
import { ResourceCard } from "./ResourceCard";

type Props = {name: keyof typeof producersExtra }

export const BuildingMoreInfoButton: FC<Props> = ({name}) => {
    const [open, setOpen] = useState(false)
    const building = producersExtra[name]
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
                    Production(/s)
                </Typography>
                <Divider/>
                <Box sx={{display: "flex"}}>
                    <Box sx={{width: "50%"}}>
                        One {building.name}
                        <br/>
                        <Box sx={{display: "flex"}}>
                            <ResourceCard name="damage" amount={producers[name].production.damage}/>
                            <ResourceCard name="money" amount={producers[name].production.money}/>
                        </Box>
                    </Box>
                    <Box>
                        All {building.name}s
                        <br/>
                        <Box sx={{display: "flex"}}>
                            <ResourceCard name="damage" amount={producers[name].production.damage * amount}/>
                            <ResourceCard name="money" amount={producers[name].production.money * amount}/>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
        </>
    )
} 