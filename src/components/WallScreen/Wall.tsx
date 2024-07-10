import { Divider, Image, Text } from '@mantine/core';
import wallImage from '../../images/walls/Wall_1.png'
import { Pane } from '../util/Pane';
import { ResourcePill } from '../util/ResourcePill';
import classes from './Wall.module.css'
import { useSystemStore } from '../../store/systemStore';
import { walls } from '../../data/walls';
import { objectKeys } from '../../util';


export const Wall = () => {
  const wall = walls[2]
  return <div>
    <WallImage />
    <Pane>
      <Text fw={700}>The {wall.name}</Text>
      <Text fs='italic'>{wall.description}</Text>
      <div className={classes.container}>
        <Text>Rewards:</Text>
        <Text style={{ marginRight: '7rem' }}>Health:</Text>
      </div>
      <Divider />
      <div className={classes.container}>
        <Rewards />
        <ResourcePill name='damage' amount={wall.requirement} style={{ marginTop: 'var(--mantine-spacing-xs)' }} />
      </div>
      <Text>
        Unlocks:
      </Text>
      <Divider />
      {wall.unlocks
        .map((src) => <img alt="" key={src} style={{ filter: "grayscale(100%)", margin: "2px", width: "50px", height: "50px" }} src={src} />)}
    </Pane>
  </div>
}

const WallImage = () => {
  const damage = useSystemStore(s => s.data.resources.damage)

  const wall = walls[1]

  return damage <= wall.requirement ?
    <Image src={wallImage} className={classes.wall} style={{ animationName: 'none' }} /> :
    <Image src={wallImage} className={classes.wall} />
}

const Rewards = () => {
  return (
    <div style={{ display: 'flex' }}>
      {objectKeys(walls[2].reward)
        .filter(name => walls[2].reward[name] !== 0)
        .map(name =>
          <ResourcePill key={name} name={name} amount={walls[2].reward[name]} style={{ margin: '0.3rem', marginTop: 'var(--mantine-spacing-xs)' }} />)}
    </div>
  )
}
