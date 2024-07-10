import { Divider, AppShell, UnstyledButton } from "@mantine/core"
import { AchievementsIcon, BuildingsIcon, LabIcon, SettingsIcon, StatsIcon, UpgradesIcon, WallIcon } from "./util/Icons"
import { FC, useState } from "react"
import cx from 'clsx';
import { Wall } from "./WallScreen/Wall"

import classes from './Sidebar.module.css'
import { Settings } from "./SettingsScreen/Settings"
import { ResourceBar } from "./ResourceBar";
import { Buildings } from "./BuildingsScreen/Buildings";
import { Upgrades } from "./UpgradeScreen/Upgrades";
import { Achievements } from "./AchievementsScreen/Achievements";

type SidebarButtonProps = {
    icon: FC<any>,
    id: number,
    active: number,
    onClick: (_:number) => void
}

const SidebarButton : FC<SidebarButtonProps> = ({icon: Icon, id, active, onClick}) => {
    return (
        <UnstyledButton style={{textAlign: 'center'}} onClick={() => onClick(id)} className={cx({[classes.active]: id === active}, classes.link)}>
            <Icon/>
        </UnstyledButton>
    )
}

const Tabs: FC<{tab: number}> = ({tab}) => {
    switch(tab) {
        case 1: return <Wall/>
        case 2: return <Buildings/>
        case 3: return <Upgrades/>
        case 4: return null
        case 5: return <Achievements/>
        case 6: return null
        case 7: return <Settings/>
        default: return null
    }
}

export const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(1)
    
    const clickHandler = (activeTab: number) => setActiveTab(activeTab)
    
    return (
    <AppShell navbar={{width: 50, breakpoint:'sm'}}>
        <AppShell.Navbar className={classes.navbar} style={{paddingTop: '1rem'}}>
            <SidebarButton icon={WallIcon} id={1} active={activeTab} onClick={clickHandler}/>
            <SidebarButton icon={BuildingsIcon} id={2} active={activeTab} onClick={clickHandler}/>
            <SidebarButton icon={UpgradesIcon} id={3} active={activeTab} onClick={clickHandler}/>
            <SidebarButton icon={LabIcon} id={4} active={activeTab} onClick={clickHandler}/>
            <SidebarButton icon={AchievementsIcon} id={5} active={activeTab} onClick={clickHandler}/>
            <SidebarButton icon={StatsIcon} id={6} active={activeTab} onClick={clickHandler}/>
            <SidebarButton icon={SettingsIcon} id={7} active={activeTab} onClick={clickHandler}/>
            <Divider/>
        </AppShell.Navbar>
        <AppShell.Main style={{flexGrow: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <ResourceBar/>
            <Tabs tab={activeTab}/>
        </AppShell.Main>
    </AppShell>)
}