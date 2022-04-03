import { Box, Divider, Grid } from "@mui/material"
import { FC } from "react"
import { Pane } from "./Pane"
import { keyframes } from "@emotion/react";
import { walls } from "../data/walls"
import { prettify } from "../functions"
import { BrickIcon, CosmicKnowledgeIcon, MoneyIcon } from "./Icons";

export const Wall: FC = () => {
    const wall = 1

    return (
        <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
            <WallImage/>

            <Pane style={{padding: "5px"}}>
                The {walls[wall].name}
                <br/>
                <i>{walls[wall].description}</i>
                <br/>
                Rewards:
                <Divider style={{marginBottom: "5px"}}/>
                <RewardsGrid wall={wall}/>
                Unlocks:
                <Divider style={{marginBottom: "5px"}}/>
                {walls[wall].unlocks.map((src) => <img alt="" key={src} style={{filter:"grayscale(100%)", margin: "2px"}} src={src}/>)}
            </Pane>
        </div>
    )
}

const WallImage: FC = () => {
    const glow = keyframes`
        0% {box-shadow: 0 0 1px 1px #58c4b1}
        40% {box-shadow: 0 0 20px 10px #A2CFC4}
        100% {box-shadow: 0 0 1px 1px #58c4b1}
    `

    return true ? 
        <Box component="img" src={"http://i.imgur.com/M88cRwn.png"} sx={{
            width: "70vw", 
            backgroundColor: "#a2cfc4",
            marginBottom: "10px",
            cursor: "not-allowed"
        }}/> : 
        <Box component="img" src={"http://i.imgur.com/VDKRDeM.png"} sx={{
            width: "70vw", 
            backgroundColor: "#a2cfc4",
            animation: `${glow} 3.5s infinite`,
            marginBottom: "10px",
            cursor: "pointer"
        }}/>
}


const RewardsGrid: FC<{wall: number}> = ({wall}) => {
    const rewards = walls[wall].reward

    const GridItem: FC = (props) => (
        <Grid item xs={4} sx={{display:"flex", justifyContent:"center", alignItems: "center"}}>
            {props.children}
        </Grid>)

    return (
        <Grid container>
            <GridItem>
                {prettify(rewards.money)} <MoneyIcon size="small"/>
            </GridItem>
            <GridItem>
                {prettify(rewards.bricks)} <BrickIcon size="small"/>
            </GridItem>
            <GridItem>
                {prettify(10)} <CosmicKnowledgeIcon size="small"/>
            </GridItem>
        </Grid>
    )
}