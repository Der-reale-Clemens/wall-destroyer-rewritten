import { Paper } from "@mantine/core"
import {  HTMLAttributes, forwardRef } from "react"
import classes from './Pane.module.css'

interface Props {
    children: any
    style?: React.CSSProperties
}

export const Pane = forwardRef<HTMLDivElement, Props & HTMLAttributes<HTMLElement>>((props, ref) => {
    const {children, style, ...other} = props
    return  <Paper radius='lg' p='xs' ref={ref} style={props.style} classNames={{root: classes.pane}} withBorder {...other}>{props.children}</Paper>
})