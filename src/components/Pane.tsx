import {Box, useTheme} from '@mui/material'
import { FC } from 'react'

interface Props {
    style?: React.CSSProperties
}

export const Pane: FC<Props> = ({children, style}) => {
    const theme = useTheme()

    return (
    <Box sx={{
        background: theme.extra.resourceBackgroundColor,
        marginBottom:1, 
        borderRadius:"5px",
        border:"1px",
        borderStyle:"solid",
        borderColor: theme.extra.resourceBorderColor,
        width: "50vw",
        ...style
        }}
    >
        {children}
    </Box>)
}