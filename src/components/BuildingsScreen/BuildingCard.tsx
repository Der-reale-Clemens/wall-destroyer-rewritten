import { Box, Typography, useTheme } from "@mui/material"
import { FC } from "react"
import { producers } from "../../data/producers"
import { prettify } from "../../functions"
import { Producers } from "../../system/types"

type Props = {
    name: keyof Producers
    amount: number
}

export const BuildingCard: FC<Props> = ({name, amount}) => {
    const theme = useTheme()

    return (
        <Box sx={{
            background: theme.palette.text.disabled,
            borderRadius: "10px",
            border: `2px solid ${theme.palette.action.selected}`,
            width: "5em",
            height: "6em",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: "3px"
        }}>
            <img src={producers[name].img}/>
            <Box sx={{width: "5em", marginTop: "10px", borderTop: `2px solid ${theme.palette.action.selected}`, display: "flex", justifyContent: "center"}}>
                <Typography>
                    {prettify(amount)}x
                </Typography>
            </Box>
        </Box>)
}