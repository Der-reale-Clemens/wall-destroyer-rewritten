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

    return <div>
        <Select value={theme} onChange={onThemeChange}>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
        </Select>
    </div>
}