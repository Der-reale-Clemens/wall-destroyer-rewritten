import { List, ListItem, ListItemIcon, ListItemText, Button, CircularProgress, Typography, Box, useTheme, Tooltip} from "@mui/material";
import { buyProducer } from "../../redux/systemSlice";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { BuildingMoreInfoButton } from "./BuildingMoreInfoButton";
import { calculateBuildingCost, prettify } from "../../functions";
import { producers } from "../../data/producers";
import { resources } from "../../data/resources"
import { objectKeys } from "../../util";
import { Resources } from "../../system/types";

export const Buildings: FC = () => (
    <List sx={{width: "80vw"}}>
        {objectKeys(producers).map(p => <BuildingRow key={p} name={p}/>)}
    </List>
)

type Props = {
    name: keyof typeof producers
}

const BuildingRow: FC<Props> = ({name}) => {
    const theme = useTheme()
    const amount = useAppSelector(s => s.systemReducer.producers[name])

    const style = {
        background: theme.extra.resourceBackgroundColor,
        marginBottom:2,
        borderRadius:"10px",
        border:"1px",
        borderStyle:"solid",
        borderColor: theme.extra.resourceBorderColor,
    }

    return (
    <ListItem sx={style} secondaryAction={<BuyButton name={name}/>}>
        <ListItemIcon>
            <img src={producers[name].img} alt=""/>
        </ListItemIcon>
        <ListItemText sx={{width: "13vw"}} primary={<b>{producers[name].name}</b>} secondary={amount}/>
        <ListItemText primary={<CostProgresses name={name}/>}/>
        <ListItemText/>
    </ListItem>)
}


const BuyButton: FC<Props> = ({name}) => {
    const dispatch = useAppDispatch()
    const onClick = () => dispatch(buyProducer(name))

    return (
        <Box>
            <BuildingMoreInfoButton name={name}/>
            <Button variant="contained" onClick={onClick}>
                Buy
            </Button>
        </Box>
    )
}

const CostProgresses: FC<Props> = ({name}) => {
    const resources = useAppSelector(s => s.systemReducer.resources)
    const costs = calculateBuildingCost(name)
    
    //@ts-ignore
    const progress = (n) => (resources[n]/costs[n])*100 >= 100 ? 100 : (resources[n]/costs[n])*100

    return <>
        {objectKeys(costs).map(r => costs[r] > 0 ? <CostProgess key={r} resource={r} value={progress(r)} cost={costs[r]}/> : <EmptyProgrss key={r}/>)} 
    </>
}

const EmptyProgrss = () => 
    <Box sx={{ position: 'relative', display: 'inline-flex', width: '40px'}}/>


type ProgressProps = {
    resource: keyof Resources
    value: number
    cost: number
}

const CostProgess: FC<ProgressProps> = ({resource, value, cost}) => (
    <Tooltip title={prettify(cost)}>
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={value} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {resources[resource].icon({size: "medium", style:{paddingTop: "4px"}})}
        </Typography>
      </Box>
    </Box>
    </Tooltip>)