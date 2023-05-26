import { useEffect, useRef, useState } from "react";
import { DataSet, Network, Options } from 'vis-network/standalone/esm/vis-network';
import {upgrades, connections} from '../../data/upgrades'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { buyUpgrade } from "../../redux/systemSlice";
import { objectEntries } from "../../util";
import { UpgradeDisplay } from "./UpgradeDisplay";

const idTable = new Map(Object.keys(upgrades)
    .map((key, id) => [key, id]))
const inverseIdTable = new Map(Object.keys(upgrades)
    .map((key, id) => [id, key]))

const upgradeNodes = objectEntries(upgrades)
    .map(([key, u], id) => ({
        key: key,
        id: id,
        shape: 'image',
        title: u.name,
        image: u.img,
        color: {border: 'grey'} , 
        opacity: 0.5,
        hidden: true,
        size: 30
    }))
    
const upgradeEdges = Object.entries(connections)
    .map(([from, to]) => ({
        from: idTable.get(from) as number,
        to: idTable.get(to) as number
    }))

const options: Options = {
    layout: {
        randomSeed: 2
    },
    interaction: {
        dragNodes: false
    },
    nodes: {
        borderWidthSelected: 3,
        shapeProperties: {
            useBorderWithImage: true,
        },
    },
    physics: {
        enabled: false
    }
};

const data = {
    nodes: new DataSet(upgradeNodes),
    //@ts-ignore
    edges: new DataSet(upgradeEdges),
}

export const UpgradeTree = () => {
    const container = useRef<HTMLDivElement>(null)
    const [network, setNetwork]= useState<Network | null>(null)
    const unlockedUpgrades = useAppSelector(s => s.systemReducer.unlockedUpgrades)
    const boughtUpgrades = useAppSelector(s => s.systemReducer.boughtUpgrades)
    const [currentNode, setCurrentNode] = useState<Array<number>>([])
    const previousNode = useRef<number>(-1)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const newData = upgradeNodes.filter((u) => boughtUpgrades.includes(u.key))
            .map((u) => ({
                ...u,
                opacity: 1,
                size: 25,
                hidden: false
            }))
        data.nodes.update(newData)
    }, [boughtUpgrades])

    useEffect(() => {
        const newData = upgradeNodes.filter((u) => unlockedUpgrades.includes(u.key))
            .filter((u) => !boughtUpgrades.includes(u.key))
            .map((u) => ({
                ...u,
                hidden: false
            }))
        data.nodes.update(newData)
    }, [unlockedUpgrades])

    //Handle clicking of upgrades
    //Needs to be so complex as the network can only 'emit' a click event and 
    //is not able to access state due to the state being memoized if inside a useEffect hook
    useEffect(() => {
        const node = currentNode.length === 0 ? -1 : currentNode[0]
        if(node !== -1 && previousNode.current === node) {
            //@ts-ignore
            dispatch(buyUpgrade(inverseIdTable.get(node)))
        }
        previousNode.current = node
    }, [currentNode])

    //Create Graph and attach it to the container
    useEffect(() => {
        //@ts-ignore
        const net = new Network(container.current, data, options)
        net.on('click', (params) => setCurrentNode(params.nodes))
        setNetwork(net)
    }, [container]);
    
    return (
        <>
            <div ref={container} style={{ height: '90vh', width: '90vw' }}/>
            {currentNode.length !== 0 ? <UpgradeDisplay upgrade={inverseIdTable.get(currentNode[0])}/> : null}
        </>
        
    );
}