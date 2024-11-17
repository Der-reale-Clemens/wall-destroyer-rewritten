import { ImaginaryBrickIcon,} from './util/Icons'
import { Pane } from './util/Pane'
import {Text} from '@mantine/core'
import classes from './ResourceBar.module.css'
import { prettify } from '../functions'
import { useSystemStore } from '../store/systemStore'
import type { resources } from '../data/resources'
import type { FC } from 'react'
import { ResourcePill } from './util/ResourcePill'

type Props = {
    name: keyof typeof resources
}

const Resource: FC<Props> = ({name}) => {
    const amount = useSystemStore(state => state.data.resources[name])

    return <ResourcePill name={name} amount={0}>
        <div className={classes.textContainer}>
            <Text size='xl' style={{marginBottom: '-5px'}}>{prettify(amount)}</Text>
            <Text size='sm'>(+100M/s)</Text>
        </div>
    </ResourcePill>
}

export const ResourceBar = () => {
    return  (
    <Pane style={{display: 'flex'}}>
        <Resource name='money'/>
        <Resource name='damage'/>
        <Resource name='bricks'/>
        <div className={classes.resourceDisplay} style={{marginRight: '0px'}}>
            <ImaginaryBrickIcon size='lg'/>
            <div>
                <Text size='xl' style={{marginBottom: '-5px'}}>100M</Text>
                <Text size='sm'>(+10M/s)</Text>
            </div>
        </div>
    </Pane>
    )
}