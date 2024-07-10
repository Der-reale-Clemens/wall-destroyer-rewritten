import { Pane } from "../util/Pane"
import { ResourcePill } from '../util/ResourcePill'
import { producers } from '../../data/producers'
import { Producers } from '../../system/types'
import { objectEntries } from '../../util'
import { FC} from 'react'
import classes from './Buildings.module.css'
import { useSystemStore } from '../../store/systemStore'
import { calculateProducerCost } from '../../system/updateFunctions'
import { SimpleTooltip } from '../util/Tooltip'

type Props = {
    name: keyof Producers
}

export const Buildings = () => {
    return (
        <div className={classes.row}>
            <div className={classes.column}> 
                <BuildingPane name='puncher'/>
                <BuildingPane name='clubber'/>
                <BuildingPane name='swordsman'/>
                <BuildingPane name='gunshooter'/>
            </div>
            <div className={classes.column}> 
                <BuildingPane name='grenademan'/>
                <BuildingPane name='wreckingBall'/>
                <BuildingPane name='bulldozer'/>
                <BuildingPane name='airstrikeCaller'/>
            </div>
            <div className={classes.column}> 
                <BuildingPane name='necromancer'/>
                <BuildingPane name='titan'/>
                <BuildingPane name='demon'/>
                <BuildingPane name='brickFactory'/>
                <BuildingPane name='blackObliterator'/>
            </div>
        </div>
    )
}

const BuildingPane: FC<Props> = ({name}) => {
    const amount = useSystemStore(s => s.data.producers[name])
    const buyProducer = useSystemStore(s => s.buyProducer)
    const cost = calculateProducerCost(producers[name], amount)
    const production = producers[name].production

    return (
        <SimpleTooltip label={producers[name].name} description={producers[name].description} color='dark.4'>
            <Pane onClick={() => buyProducer(name)}>
                <div className={classes.building}>
                    <div className={classes.imageContainer}>
                        <img src={producers[name].img} className={classes.image}/>
                        <div className={classes.imageText}>{amount}x</div>
                    </div>
                    <div>
                        <div className={classes.row}>
                            {objectEntries(cost)
                                .filter(([_,a]) => a !== 0)
                                .map(([n,a]) => <ResourcePill key={n} size='sm' name={n} amount={a}/>)}
                        </div>
                        
                        <div className={classes.productionDisplay}>
                            {objectEntries(production)
                                .filter(([_,a]) => a !== 0)
                                .map(([n,a]) => <ResourcePill size='sm' key={n} name={n} amount={a} perS/>)}
                        </div>
                    </div>
                </div>
            </Pane>
        </SimpleTooltip>
    )
}