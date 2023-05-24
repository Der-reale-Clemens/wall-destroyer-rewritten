import { Dialog, DialogContent, DialogTitle, IconButton, Chip, Typography, Divider, Box } from "@mui/material";
import { FC, useState } from "react";
import { producers } from "../../data/producers";
import { upgrades } from "../../data/upgrades";
import { calculateBuildingCost } from "../../functions";
import { useAppSelector } from "../../redux/hooks";
import { Resources } from "../../system/types";
import { createObjectFromKeys, objectKeys } from "../../util";
import { InfoIcon } from "../util/Icons"
import { ResourceCard } from "../util/ResourceCard";

type Props = {name: keyof typeof producers}

export const BuildingMoreInfoButton: FC<Props> = ({name}) => {
    const [open, setOpen] = useState(false)
    const building = producers[name]
    const amount = useAppSelector(s => s.systemReducer.producers[name])
    const boughtUpgrades = useAppSelector(s => s.systemReducer.boughtUpgrades)

    // Probably needs to move once this gets more complicated
    const calculateProduction = () => {
        const baseProduction = building.production
        const upgradesMultiplier = boughtUpgrades.reduce((acc, cur) => acc * upgrades[cur].effect()[name], 1)

        return createObjectFromKeys(baseProduction, (r) => baseProduction[r] * upgradesMultiplier)
    }
    const production = calculateProduction()

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
                    {objectKeys(building.cost)
                        .filter(r => building.cost[r] !== 0)
                        .map(r => <ResourceCard key={r} name={r} amount={calculateBuildingCost(name)[r]}/>)}
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
                            {objectKeys(production)
                                .filter(r => production[r] !== 0)
                                .map(r => <ResourceCard key={r} name={r} amount={production[r]}/>)}
                        </Box>
                    </Box>
                    <Box>
                        All {building.name}s
                        <br/>
                        <Box sx={{display: "flex"}}>
                            {objectKeys(production)
                                .filter(r => production[r] !== 0)
                                .map(r => <ResourceCard key={r} name={r} amount={production[r] * amount}/>)}
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
        </>
    )
} 