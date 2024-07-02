import { MantineColorScheme, SegmentedControl, useMantineColorScheme, Text } from "@mantine/core"
import { useAppStore } from "../../store/store";
import { Pane } from "../util/Pane";
import classes from './Settings.module.css'


export const Settings = () => {
    const { setColorScheme } = useMantineColorScheme();
    
    const [colorScheme, updateColorScheme] = useAppStore(state => [state.theme, state.setTheme])
    const [format, setFormat] = useAppStore(state => [state.format, state.setFormat])

    const onChange = (value: MantineColorScheme) => {
        setColorScheme(value)
        updateColorScheme(value)
    }

    return <Pane style={{display: 'flex', flexDirection: 'column'}}>
        <div className={classes.rowContainer}>
            <Text>
                Color Scheme:
            </Text>
            <SegmentedControl value={colorScheme} onChange={onChange} data={[
            {label: 'System', value: 'auto'},
            {label:'Light', value: 'light'}, 
            {label: 'Dark', value: 'dark'}]}/>
        </div>
        <div className={classes.rowContainer}>
            <Text>
                Notation:
            </Text>
            <SegmentedControl value={format} onChange={setFormat} data={[
                {label: 'Standard', value: 'standard'},
                {label: 'Scientific', value: 'scientific'}]}/>
        </div>
        </Pane>
}