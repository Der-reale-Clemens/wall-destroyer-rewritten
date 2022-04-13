import { Box, Typography, useTheme } from "@mui/material"
import { FC } from "react"
import { resources, Resources } from "../data/resources"
import { prettify } from "../functions"

type Props = {
    name: Resources,
    amount: number
}

export const ResourceCard: FC<Props> = ({name, amount}) => {
    const theme = useTheme()

    const icon = resources[name].extra.icon({size:"large", style:{marginBottom: "0.5em", marginTop: "0.5em"}})

    return (
        <Box sx={{
            background: resources[name].extra.backgroundColor,
            borderRadius: "10px",
            border: `2px solid ${theme.extra.resourceBorderColor}`,
            width: "5em",
            height: "6em",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: "3px"
        }}>
            {icon}
            <Box sx={{width: "5em", borderTop: `2px solid ${theme.extra.resourceBorderColor}`, display: "flex", justifyContent: "center"}}>
                <Typography>
                    {prettify(amount)}
                </Typography>
            </Box>
        </Box>)
}