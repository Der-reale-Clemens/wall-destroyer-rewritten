import { FC } from "react"
import { Pane } from "../util/Pane"
import { upgrades } from "../../data/upgrades"
import { Box, Divider, Typography } from "@mui/material"
import { UpgradeExtended, Upgrades } from "../../system/types"
import { objectEntries } from "../../util"
import { ResourceCard } from "../util/ResourceCard"
import { useAppSelector } from "../../redux/hooks"

type Props = {
    upgrade: keyof Upgrades
}

export const UpgradeDisplay: FC<Props> = ({upgrade}) => {
    const boughtUpgrades = useAppSelector(s => s.systemReducer.boughtUpgrades)
    const u = upgrades[upgrade] as UpgradeExtended
    const showCost = !boughtUpgrades.includes(upgrade)

    return (
    <Box sx={{position: 'fixed', bottom: 0, right: 0, display: 'flex', flexDirection: 'row', alignItems: 'end', m: '1em'}}>
        {showCost && objectEntries(u.cost)
            .filter(([key, cost]) => cost !== 0)
            .map(([key, cost]) => 
                <Box sx={{mb: '3px'}}>
                    <ResourceCard key={key} name={key} amount={cost}/>
                </Box>)}
        <Pane style={{width: "20em", display: "flex", flexDirection: 'column',}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <img src={u.img} style={{width: '50px', height: '50px'}}/>
                <Typography variant="h6" sx={{pl: '0.5em', alignSelf: 'center'}}>
                    {u.name}
                </Typography>
            </Box>
        
            <Divider/>
            <Typography variant='body2' sx={{p: '0.5em'}}>
                Everything is 5% more effiecent
            </Typography>
            <Divider/>
            <Typography variant="body2" sx={{p: '0.5em'}} >
                {u.description}
            </Typography>
        </Pane>
    </Box>
    )
}