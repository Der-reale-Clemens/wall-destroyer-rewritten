import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import { setFormat, setTheme } from "../redux/appSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const Settings: FC = () => {
    const theme = useAppSelector(s => s.appReducer.theme)
    const format = useAppSelector(s => s.appReducer.format)
    const dispatch = useAppDispatch()

    const onThemeChange = (e: SelectChangeEvent) => {
        dispatch(setTheme(e.target.value))
    }
    const onFormatChange = (e: SelectChangeEvent) => {
        dispatch(setFormat(e.target.value))
    }

    return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "300px", margin: "0 auto", textAlign: "center"}}>
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
        </div>
    </div>)
}
