import { Box, Typography, useTheme } from "@mui/material"
import { FC } from "react"
import { resourcesExtra } from "../data/mappings"
import { Resources } from "../data/resources"
import { prettify } from "../functions"
import { BrickIcon, CosmicKnowledgeIcon, DamageIcon, MoneyIcon } from "./Icons"

type Props = {
    name: Resources | "cosmicKnowledge",
    amount: number
}

export const ResourceCard: FC<Props> = ({name, amount}) => {
    const theme = useTheme()

    const icon = "damage" === name ? <DamageIcon size="large" style={{marginBottom: "0.5em", marginTop: "0.5em"}}/>
                :("money" === name ? <MoneyIcon size="large" style={{marginBottom: "0.5em", marginTop: "0.5em"}}/>
                :("bricks" === name ? <BrickIcon size="large" style={{marginBottom: "0.5em", marginTop: "0.5em"}}/>
                :("cosmicKnowledge" === name ? <CosmicKnowledgeIcon size="large" style={{marginBottom: "0.5em", marginTop: "0.5em"}}/>
                : null)))

    return (
        <Box sx={{
            background: resourcesExtra[name].backgroundColor,
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