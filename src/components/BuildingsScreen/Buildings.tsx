import {Text, Tooltip} from '@mantine/core'
import { Pane } from "../util/Pane"
import { ResourcePill } from '../util/ResourcePill'
import { producers } from '../../data/producers'
import { Producers } from '../../system/types'
import { objectEntries } from '../../util'
import { FC} from 'react'
import classes from './Buildings.module.css'
import { useSystemStore } from '../../store/systemStore'

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
            </div>
        </div>
    )
}

const BuildingPane: FC<Props> = ({name}) => {
    const amount = useSystemStore(s => s.data.producers[name])
    return (
        <Tooltip label={<BuildingTooltip name={name}/>} color='dark.4'>
            <Pane>
                <div className={classes.building}>
                    <div className={classes.imageContainer}>
                        <img src={producers[name].img} className={classes.image}/>
                        <div className={classes.imageText}>{amount}x</div>
                    </div>
                    <div>
                        <div className={classes.row}>
                            {objectEntries(producers[name].cost).map(([n,a]) => <ResourcePill key={n} size='sm' name={n} amount={a}/>)}
                        </div>
                        
                        <div className={classes.productionDisplay}>
                            {objectEntries(producers[name].production)
                                .filter(([_,a]) => a !== 0)
                                .map(([n,a]) => <ResourcePill size='sm' key={n} name={n} amount={a} perS/>)}
                        </div>
                    </div>
                </div>
            </Pane>
        </Tooltip>
    )
}


// export const BuildingsOld = () => {
//     return (
//         <div className={classes.buildings}>
//         <div className={classes.buildingClass}>
//             <BuildingPane name='puncher'/>
//             <BuildingPane name='clubber'/>
//             <BuildingPane name='swordsman'/>
//         </div>
//         <div className={classes.buildingClass}>
//             <BuildingPane name='gunshooter'/>
//             <BuildingPane name='grenademan'/>
//         </div>
//         <div className={classes.buildingClass}>
//             <BuildingPane name='wreckingBall'/>
//             <BuildingPane name='bulldozer'/>
//             <BuildingPane name='airstrikeCaller'/>
//         </div>
//         <div className={classes.buildingClass}>
//             <BuildingPane name='blackObliterator'/>
//         </div>
//         </div>
//     )
// }




// const BuildingPane: FC<Props> = ({name}) => {
//     return (
//         <Tooltip label={<BuildingTooltip name={name}/>} color='dark.4'>
//             <Pane style={{ width: '225px', display: 'flex', flexDirection: 'column'}}>
//                 <div style={{display: 'flex', justifyContent: 'space-between'}}>
//                     <img src={producers[name].img} className={classes.image}/>
//                     <div>
//                         {objectEntries(producers[name].cost).map(([n,a]) => <ResourcePill size='sm' name={n} amount={a}/>)}
//                     </div>
//                 </div>
//                 <div className={classes.productionDisplay}>
//                     {objectEntries(producers[name].production)
//                         .filter(([_,a]) => a !== 0)
//                         .map(([n,a]) => <ResourcePill size='sm' name={n} amount={a}/>)}
//                 </div>
//              </Pane>
//         </Tooltip>)
// }

const BuildingTooltip: FC<Props> = ({name}) => {
    return (
        <div style={{width: '300px'}}>
            <Text fw={700}>{producers[name].name}</Text>
            <Text style={{width: '300px', whiteSpace: 'normal'}}>{producers[name].description}</Text>
        </div>
    )
}