import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import { setTheme } from "../redux/appSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const Settings: FC = () => {
    const theme = useAppSelector(s => s.appReducer.theme)
    const dispatch = useAppDispatch()

    const onThemeChange = (e: SelectChangeEvent) => {
        dispatch(setTheme(e.target.value))
    }

    return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{display: "inline"}}>
            Theme:
            <Select value={theme} onChange={onThemeChange} style={{marginLeft: "10px"}}>
                <MenuItem value="light">Light</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
            </Select>
        </div>
    </div>)
}