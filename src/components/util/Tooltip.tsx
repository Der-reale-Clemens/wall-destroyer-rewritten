import { HTMLAttributes, forwardRef } from "react"
import classes from "./Tooltip.module.css"
import { Text, Tooltip as MantineTooltip } from "@mantine/core"

//TODO: Fix light mode

type Props = {
    children: any
    label: any
}

export const Tooltip = forwardRef<HTMLDivElement, Props & HTMLAttributes<HTMLElement>>((props, ref) => {
    const {children, label,  ...other} = props
    return <MantineTooltip label={label} className={classes.tooltip} ref={ref} {...other} color="dark.4">{children}</MantineTooltip>
})

type SimpleProps = {
    children: any
    label: string
    description: string
}

export const SimpleTooltip = forwardRef<HTMLDivElement, SimpleProps & HTMLAttributes<HTMLElement>>((props, ref) => {
    const {children, label, description,  ...other} = props

    const tt = <div className={classes.tooltip}>
        <Text fw={700}>{label}</Text>
        <Text className={classes.description}>{description}</Text>
    </div>

    return <MantineTooltip label={tt} ref={ref} {...other} color="dark.4">{children}</MantineTooltip>
})