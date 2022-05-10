import { List, ListItem, ListItemIcon, ListItemText, Button, CircularProgress, Typography, Box, useTheme} from "@mui/material";
import { buyProducer } from "../redux/systemSlice";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { BrickIcon, MoneyIcon, ImaginaryBrickIcon} from "./Icons";
import { BuildingMoreInfoButton } from "./BuildingMoreInfoButton";
import { calculateBuildingCost } from "../functions";
import { producers } from "../data/producers";

export const Buildings: FC = () => {
    return <List sx={{width: "80vw"}}>
        <BuildingRow name="puncher"/>
        <BuildingRow name="clubber"/>
        <BuildingRow name="swordsman"/>
        <BuildingRow name="blackObliterator"/>
    </List>
}

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
        <CostProgess icon={<MoneyIcon size="medium" style={{paddingTop: "4px"}}/>} value={progress("money")}/>
        <CostProgess icon={<BrickIcon size="medium" style={{paddingTop: "5px"}}/>} value={progress("bricks")}/>
        <CostProgess icon={<ImaginaryBrickIcon size="medium" style={{paddingTop: "5px"}}/>} value={progress("bricks")}/>
    </>
}

const CostProgess = (props: any) => {
    const icon = props.icon

    return <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
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
          {icon}
        </Typography>
      </Box>
    </Box>}