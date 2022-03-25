import { List, ListItem, ListItemIcon, ListItemText, Button, CircularProgress, Typography, Box, useTheme} from "@mui/material";
import { buyProducer } from "../redux/systemSlice";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { producersExtra } from "../data/mappings";
import moneyImg from "../images/money.png"
import brickImg from "../images/brick.png"
import imaginaryBrickImg from "../images/imaginaryBrick.png"

export const Buildings: FC = () => {
    return <List sx={{width: "80vw"}}>
        <BuildingRow name="puncher"/>
        <BuildingRow name="clubber"/>
        <BuildingRow name="swordsman"/>
    </List>

}

type Props = {
    name: keyof typeof producersExtra
}

const BuildingRow: FC<Props> = ({name}) => {
    const theme = useTheme()
    const amount = useAppSelector(s => s.systemReducer.player.producers[name])

    const style = {
        background: theme.extra.resourceBackgroundColor,
        //background: theme.palette.background.default,
        marginBottom:2,
        borderRadius:"10px",
        border:"1px",
        borderStyle:"solid",
        borderColor: theme.extra.resourceBorderColor,
        //borderColor: theme.palette.divider
    }

    return (
    <ListItem sx={style} secondaryAction={<BuyButton name={name}/>}>
        <ListItemIcon>
            <img src={producersExtra[name].img} alt=""/>
        </ListItemIcon>
        <ListItemText sx={{width: "13vw"}} primary={<b>{producersExtra[name].name}</b>} secondary={amount}/>
        <ListItemText primary={<CostProgresses name={name}/>}/>
        <ListItemText/>
    </ListItem>)
}

const BuyButton: FC<Props> = ({name}) => {
    const dispatch = useAppDispatch()
    const onClick = () => dispatch(buyProducer(name))

    return <Button variant="contained" onClick={onClick}>
        Buy
    </Button>
}

const CostProgresses: FC<Props> = ({name}) => {
    const costs = useAppSelector(s => s.systemReducer.data.producers[name].cost)
    const resources = useAppSelector(s => s.systemReducer.player.resources)
    //@ts-ignore
    const progress = (n) => (resources[n]/costs[n])*100 >= 100 ? 100 : (resources[n]/costs[n])*100

    return <>
        <CostProgess icon={<img style={{width: "21px", height:"21px", marginTop: "5px"}}src={moneyImg}/>} value={progress("money")}/>
        <CostProgess icon={<img style={{width: "28px", height:"28px", marginTop: "5px"}}src={brickImg}/>} value={progress("bricks")}/>
        <CostProgess icon={<img style={{width: "28px", height:"28px", marginTop: "5px"}}src={imaginaryBrickImg}/>} value={progress("bricks")}/>
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