import {FC, useState} from 'react';
import { keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Panels, PanelsProps } from './Panels';
import { Resources } from './Resources';
import { WallIcon, BuildingsIcon, UpgradesIcon, AchievementsIcon, StatsIcon, SettingsIcon, LabIcon} from './util/Icons';
import { LockedContent } from './util/LockedContent';

const Drawer: FC<any> = ({setPanel}) => {
    return (
        <MuiDrawer variant='permanent' sx={{'& .MuiDrawer-paper': {width: '56px'}}}>
            <List>
                <ListItem button onClick={() => setPanel("wall")}>
                    <ListItemIcon>
                        <WallIcon/>
                    </ListItemIcon>
                </ListItem>
                <LockedContent flag="destroyedWall0" hidden>
                    <ListItem button onClick={() => setPanel("buildings")}>
                        <ListItemIcon>
                            <BuildingsIcon/>
                        </ListItemIcon>
                    </ListItem>
                </LockedContent>
                <LockedContent flag="destroyedWall1" hidden>
                    <ListItem button onClick={() => setPanel("upgrades")}>
                        <ListItemIcon>
                            <UpgradesIcon/>
                        </ListItemIcon>
                    </ListItem>
                </LockedContent>
                <LockedContent flag="destroyedWall2" hidden>
                    <ListItem button onClick={() => setPanel("lab")}>
                        <ListItemIcon>
                            <LabIcon/>
                        </ListItemIcon>
                    </ListItem>
                </LockedContent>
                <LockedContent flag="destroyedWall1" hidden>
                    <ListItem button onClick={() => setPanel("achievements")}>
                        <ListItemIcon>
                            <AchievementsIcon/>
                        </ListItemIcon>
                    </ListItem>
                </LockedContent>
                <ListItem button onClick={() => setPanel("stats")}>
                    <ListItemIcon>
                        <StatsIcon/>
                    </ListItemIcon>
                </ListItem>
                <ListItem button onClick={() => setPanel("settings")}>
                    <ListItemIcon>
                        <SettingsIcon/>
                    </ListItemIcon>
                </ListItem>
            </List>
            <Divider/>
        </MuiDrawer>
    )
}


export const Sidebar: FC = () => {
    const [panel, setPanel] = useState<PanelsProps["panel"]>("wall")

    const explode = keyframes`
      0% {transform:scale(0); filter:blur(5pxpx)}
      100% {transform:scale(1); filter:blur(0px)}
    `

    return (
        <Box sx={{ display: 'flex', animation: `${explode} 1s 1`}}>
            <Drawer setPanel={setPanel}/>
            <Box component="main" sx={{ flexGrow: 1, p: 1, display: "flex", alignItems: "center", flexDirection: "column"}}>
                <Resources/>
                <Panels panel={panel}/>
            </Box>
        </Box>
    );
}
