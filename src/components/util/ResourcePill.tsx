import type { FC } from "react"
import { resources } from "../../data/resources"
import { Text } from "@mantine/core"
import { prettify } from "../../functions"
import classes from './ResourcePill.module.css'

type Props = {
    name: keyof typeof resources,
    amount: number,
    size?: 'sm' | 'md' | 'lg'
    style?: React.CSSProperties,
    children?: React.ReactNode
    perS?: boolean
}

export const ResourcePill: FC<Props> = ({name, amount, size = 'lg', style, children, perS}) => {
    const icon = resources[name].icon({size})

    const text = perS ? `+${prettify(amount)}/s` : prettify(amount)

    return <div data-size={size} data-type={name} className={classes.pill} style={style}>
        {icon}
        <div data-size={size} className={classes.pillContent}>
            {children ? children : <Text size={size === 'lg' ? 'xl' : (size === 'md' ? 'lg' : 'sm')}>{text}</Text>}
        </div>
    </div>
}

// type PropsCard = {
//     name: keyof typeof resources,
//     amount: number,
//     style?: React.CSSProperties,
// }

// export const ResourceCard: FC<PropsCard> = ({name, amount, style}) => {
//     const borderColor = lighten(resources[name].backgroundColor, 0.5)
//     const icon = resources[name].icon({size:'lg', style: {marginBottom: '0.33em', marginTop: '0.3em'}})

//     return <div className={classes.card} style={{background: resources[name].backgroundColor, borderColor, ...style}}>
//         {icon}
//         <div className={classes.amountDisplay} style={{borderColor}}>
//             <Text size="sm">
//                 {prettify(amount)}
//             </Text>
//         </div>
//     </div>
// }

