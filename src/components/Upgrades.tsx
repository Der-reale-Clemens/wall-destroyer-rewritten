import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, Typography } from "@mui/material";
import { FC, useState } from "react";
import { upgrades } from "../data/upgrades";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { buyUpgrade } from "../redux/systemSlice";
import { Upgrades as UpgradesType} from "../system/types";
import { everyMatch, objectKeys } from "../util";
import { BuildingCard } from "./BuildingCard";
import { ResourceCard } from "./ResourceCard";

export const Upgrades: FC = () => {
    const unlockedUpgrades = useAppSelector(s => s.systemReducer.unlockedUpgrades)

    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Box sx={{display: "flex", width: "80vw", flexWrap: "wrap"}}>
                {unlockedUpgrades.map(u => <Upgrade key={u} name={u}/>)}
            </Box>
        </Box>
    )
}

type Props = {
    name: keyof UpgradesType
}

const Upgrade: FC<Props> = ({name}) => {
    const [open, setOpen] = useState(false)
    const upgrade = upgrades[name]
    const resources = useAppSelector(s => s.systemReducer.resources)
    const boughtUpgrades = useAppSelector(s => s.systemReducer.boughtUpgrades)
    const dispatch = useAppDispatch()

    const isBought = boughtUpgrades.indexOf(name) !== -1
    const canBuy = everyMatch(objectKeys(resources), r => resources[r] >= upgrade.cost[r])

    return (
        <>
        <Box sx={{margin: "2px", position: "relative"}} onClick={() => setOpen(true)}>
            <UpgradeImage name={name} state={isBought ? "bought" : (canBuy ? "buyable" : "unlocked")}/>
        </Box>
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth={true}
            maxWidth="sm"
        >
            <DialogTitle sx={{display: "flex", justifyContent: "space-between"}}>
                {upgrade.name}
                <Button variant="contained" onClick={() => dispatch(buyUpgrade(name))}>
                    Buy
                </Button>
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    {upgrade.description}
                </Typography>
                <Typography>
                    Cost
                </Typography>
                <Divider/>
                <Box sx={{display: "flex"}}>
                    {objectKeys(upgrade.cost)
                        .filter(r => upgrade.cost[r] !== 0)
                        .map(r => <ResourceCard key={r} name={r} amount={upgrade.cost[r]}/>)}
                </Box>
                <Typography>
                    Effect
                </Typography>
                <Divider/>
                <Box sx={{display: "flex"}}>
                    {objectKeys(upgrade.effect())
                        .filter(e => upgrade.effect()[e] !== 1)
                        .map(e => <BuildingCard key={e} name={e} amount={upgrade.effect()[e]}/>)}
                </Box>
            </DialogContent>
        </Dialog>
        </>
    )
}

type ImageProps = {
    name: keyof UpgradesType
    state: "bought" | "buyable" | "unlocked"
}

const UpgradeImage: FC<ImageProps> = ({name, state}) => {
    switch(state) {
        case "bought": return <img src={upgrades[name].img} />
        case "buyable": return <img src={upgrades[name].img} style={{filter: "grayscale(100%)"}}/>
        case "unlocked": return <>
            <img src={upgrades[name].img} />
            <span style={{position: "absolute", background: "repeating-linear-gradient(135deg,rgba(255, 0, 0, 0.3),rgba(255, 0, 0, 0.3) 10px," +
                "rgba(255, 0, 0, 0.5) 10px," +
                "rgba(255, 0, 0, 0.5) 20px)",
                left: 0,
                width: "100%",
                height: "90%",
                zIndex: 100,
                backgroundPosition: "center"}}
            /></>
    }
}