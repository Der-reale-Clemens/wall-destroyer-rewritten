import { Paper } from "@mantine/core"
import { forwardRef } from "react"
import classes from './Pane.module.css'

interface Props {
    children: any
    style?: React.CSSProperties
}

export const Pane = forwardRef<HTMLDivElement, Props>((props, ref) => 
    <Paper radius='lg' p='xs' ref={ref} style={props.style} classNames={{root: classes.pane}} withBorder>{props.children}</Paper>)