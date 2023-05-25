import { useEffect, useRef, useState } from "react";
import { Data, DataSet, Network, Options } from 'vis-network/standalone/esm/vis-network';
import {upgrades, connections} from '../../data/newUpgrades'

const idTable = new Map(Object.keys(upgrades)
    .map((key, id) => [key, id]))

const upgradeNodes = Object.values(upgrades)
    .map((u, id) => ({
        id: id,
        shape: 'image',
        title: u.name,
        image: u.img,
    }))
    
const upgradeEdges = Object.entries(connections)
    .map(([from, to]) => ({
        from: idTable.get(from) as number,
        to: idTable.get(to) as number
    }))
    .filter(edge => edge.from != 0)

const data: Data = {
    nodes: new DataSet(upgradeNodes),
    //@ts-ignore
    edges: new DataSet(upgradeEdges),
};
const options: Options = {
    interaction: {
        dragNodes: false
    },
    nodes: {
        borderWidthSelected: 3,
        shapeProperties: {
            useImageSize: true,
            useBorderWithImage: true,
        }
    },
    physics: {
        enabled: false
    }
};

export const UpgradeTree = () => {
    const container = useRef<HTMLDivElement>(null)
    const activeNodes = useState(new DataSet([]))

    useEffect(() => {
        //upgradeNodes.
        //activeNodes = 
    }, [])

    useEffect(() => {
        const network =
            container.current &&
            new Network(container.current, data, options)
    }, [container, data, options]);
    
    return (
        <div ref={container} style={{ height: '90vh', width: '90vw' }}/>
    );
}