import { Box, Card, Divider, Typography, keyframes } from "@mui/material"
import { useAppDispatch} from "../redux/hooks"
import { setGameMode } from "../redux/appSlice"
import { useState } from "react"

export const Selector = () => {
    const [isSelected, setIsSelected] = useState(false)
    const dispatch = useAppDispatch()

    const collapse = keyframes`
        0% {transform:scale(1); filter:blur(0px)}
        100% {transform:scale(0); filter:blur(5px)}
    `
    const style = {
        width: '20rem', 
        padding: '1rem', 
        cursor: 'pointer',
        borderRadius: '10px',
        '&:hover': {
            transform: 'scale(1.1)', 
            boxShadow: '0 6px 12px 0 white',
        }
    }

    const styleDisabled = {
        width: '20rem', 
        padding: '1rem', 
        cursor: 'not-allowed',
        borderRadius: '10px',
        filter: 'opacity(50%)',
        // '&:hover': {
        //     transform: 'scale(1.1)', 
        //     boxShadow: '0 6px 12px 0 white',
        //}
    }

    const selectGame = (game: string) => {
        setIsSelected(true)
        setTimeout(() => dispatch(setGameMode(game)), 1000)
    }

    return (
    <Box sx={{animation: isSelected ? `${collapse} 1s 1` : ''}} height="100vh" display="flex" justifyContent="center" alignItems="center" flexDirection='column'>
        <Typography variant="h4" component="h1" gutterBottom>
            Game Selection
        </Typography>
        <Box display='flex' flexDirection='row'>
            <Card sx={{...style, mr: '10rem'}} onClick={() => selectGame('Modern')}>
                <Typography gutterBottom variant='h5' textAlign='center'>
                    Modern
                </Typography>
                <Divider/>
                A complete reimagining of the original game, with new progression, new mechanics and balance changes.
                There is a focus on different resource generations and interaction.
            </Card>
            <Card sx={styleDisabled} onClick={() => selectGame('Classic')}>
                <Typography gutterBottom variant='h5' textAlign='center'>
                    Classic
                </Typography>
                <Divider/>
                A rewrite of the original game with a new UI and slight balance changes, no more clicking for resources anymore. 
                Everything else is the same as it used to be.
            </Card>
        </Box>
    </Box>)
}