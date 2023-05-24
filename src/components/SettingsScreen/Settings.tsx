import { Button, Dialog, DialogContent, DialogTitle, Divider, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { FC, useState } from "react";
import { setFormat, setTheme } from "../../redux/appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const Settings: FC = () => {
    const theme = useAppSelector(s => s.appReducer.theme)
    const format = useAppSelector(s => s.appReducer.format)
    const dispatch = useAppDispatch()

    const [infoOpen, setInfoOpen] = useState(false)

    const onThemeChange = (e: SelectChangeEvent) => {
        dispatch(setTheme(e.target.value))
    }
    const onFormatChange = (e: SelectChangeEvent) => {
        dispatch(setFormat(e.target.value))
    }

    return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "200px", margin: "0 auto", textAlign: "left"}}>
            <div style={{display: "inline"}}>
                Theme:
                <Select value={theme} onChange={onThemeChange} style={{marginLeft: "10px"}}>
                    <MenuItem value="light">Light</MenuItem>
                    <MenuItem value="dark">Dark</MenuItem>
                </Select>
            </div>
            <br/>
            <div style={{display: "inline"}}>
                Format:
                <Select value={format} onChange={onFormatChange} style={{marginLeft: "10px"}}>
                    <MenuItem value="standard">Standard</MenuItem>
                    <MenuItem value="scientific">Scientific</MenuItem>
                </Select>
            </div>
            <div style={{textAlign: "center"}}>
                <Button onClick={() => setInfoOpen(true)}>Info</Button>
                <Dialog open={infoOpen} onClose={() => setInfoOpen(false)} fullWidth={true} maxWidth="md">
                    <DialogTitle sx={{display: "flex", justifyContent: "space-between"}}>
                        Info
                        <div>
                            v⍺.1.1
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography>
                            This a rewritte and rebalancing of my previous rewrite of the original Wall Destroyer by Tellurium. 
                            The goal of this version is to step away from the original UI and provide a more intuitive experience as well 
                            as a cleaner look and feel. Another goal was also to create a more interesting gameplay experience by shifting
                            the focus to managing the different resources and give the buildings different effiencies for different resources. 
                        </Typography>
                        <Typography variant="h6" sx={{paddingTop: "5px"}}>
                            Links
                        </Typography>
                        <Divider/>
                        <Typography>
                            Source code: <a href="https://github.com/Der-reale-Clemens/wall-destroyer-rewritten">https://github.com/Der-reale-Clemens/wall-destroyer-rewritten</a>
                            <br/>Previous Wall Destroyer:rewritten: <a href="https://der-reale-clemens.github.io/wall-destroyer-prod/">https://der-reale-clemens.github.io/wall-destroyer-prod/</a>
                            <br/>Original Wall Destroyer: <a href="http://orteil.dashnet.org/experiments/idlegamemaker/?game=hczBgm6k">http://orteil.dashnet.org/experiments/idlegamemaker/?game=hczBgm6k</a>
                        </Typography>
                        <Typography variant="h6" sx={{paddingTop: "5px"}}>
                            Changelog
                        </Typography>
                        <Divider/>
                        <ChangelogElement version="⍺.1.1"
                            description="Added this fun little Info window, with a description, links to the other wall destroyers and this changelog"/>
                        <ChangelogElement version="⍺.1 - Initial Testing release" 
                            description="Initial MVP release containing balancing up to the end of the tutorial"/>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </div>)
}

type ChangelogElementProps = {
    version: string
    description: string
}

const ChangelogElement: FC<ChangelogElementProps> = ({version, description}) => {
    return (
        <>
        <Typography variant="subtitle1">
            {version}
        </Typography>
        <Divider/>
        <Typography>
            {description}
        </Typography>
        </>
    )
}