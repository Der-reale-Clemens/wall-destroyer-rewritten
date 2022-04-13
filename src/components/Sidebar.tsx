//@ts-nocheck
import {FC, useState} from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Panels } from './Panels';
import { Resources } from './Resources';
import { WallIcon, BuildingsIcon, UpgradesIcon, AchievementsIcon, StatsIcon, SettingsIcon } from './Icons';

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    //padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer)(({ theme }) => ({
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
        ...({
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export const Sidebar: FC = () => {
    const [panel, setPanel] = useState(0);

    return (
        <Box sx={{ display: 'flex'}}>
            <Drawer variant="permanent">
                <List>
                    <ListItem button onClick={() => setPanel(0)}>
                        <ListItemIcon>
                            <WallIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button onClick={() => setPanel(1)}>
                        <ListItemIcon>
                            <BuildingsIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button onClick={() => setPanel(2)}>
                        <ListItemIcon>
                            <UpgradesIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button onClick={() => setPanel(3)}>
                        <ListItemIcon>
                            <AchievementsIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button onClick={() => setPanel(4)}>
                        <ListItemIcon>
                            <StatsIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button onClick={() => setPanel(5)}>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                    </ListItem>
                </List>
                <Divider/>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 1, display: "flex", alignItems: "center", flexDirection: "column"}}>
                <Resources/>
                <Panels panel={panel}/>
            </Box>
        </Box>
    );
}
