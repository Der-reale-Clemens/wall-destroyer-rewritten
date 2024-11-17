import { type CSSVariablesResolver, MantineProvider, createTheme, darken, lighten } from '@mantine/core';
import { Sidebar } from './components/Sidebar';
import { useEffect } from 'react';
import { update } from './functions';
import { useAppStore } from './store/store';
import { useSystemStore } from './store/systemStore';

import '@mantine/core/styles.layer.css';
import '@mantine/notifications/styles.css';
import './global.css'


const themeOverride = createTheme({
    //fontFamilyMonospace: 'Roboto Mono, monospace',
    other: {
        damageColor: 'rgb(253, 163, 17, 0.5)',
        moneyColor: 'rgb(17, 99, 0, 0.5)',
        brickColor: 'rgb(161, 58, 40, 0.5)',
        cosmicColor: 'rgb(116, 91, 193, 0.5)'
    }
})

const resolver: CSSVariablesResolver = theme => ({
    variables: {
        '--wd-damage-color': theme.other.damageColor,
        '--wd-money-color': theme.other.moneyColor,
        '--wd-brick-color': theme.other.brickColor,
        '--wd-cosmic-color': theme.other.cosmicColor
    },
    dark: {
        '--wd-damage-border': lighten(theme.other.damageColor, 0.4),
        '--wd-money-border': lighten(theme.other.moneyColor, 0.4),//'hsla(80, 100%, 30%, 0.5)',
        '--wd-brick-border': lighten(theme.other.brickColor, 0.4),
        '--wd-cosmic-border': lighten(theme.other.cosmicColor, 0.4)
    },
    light: {
        '--wd-damage-border': darken(theme.other.damageColor, 0.4),
        '--wd-money-border': darken(theme.other.moneyColor, 0.4),
        '--wd-brick-border': darken(theme.other.brickColor, 0.4),
        '--wd-cosmic-border': darken(theme.other.cosmicColor, 0.4)
    }
})

export const App = () => {
    const setTime = useAppStore(state => state.setLastUpdate)
    const increaseResource = useSystemStore(state => state.increaseResource)

    useEffect(() => {
        const interval = setInterval(() => {
            update()
            increaseResource('money', 1e3)
        }, 66)

        setTime(new Date().getTime())


        return () => clearInterval(interval)
    }, [])

    return <MantineProvider theme={themeOverride} cssVariablesResolver={resolver}>
        <Sidebar/>
    </MantineProvider>
}