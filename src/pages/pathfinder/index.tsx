'use client'
import PageHeader from "@/components/PageHeader";
import PathfinderGrid from "@/components/pathfinder/PathfinderGrid";
import PathfinderMap from "@/lib/pathfinder/PathfinderMap";
import React, {useState} from "react";

export default function Home() {
    // Forcibly rerendering
    const [, updateState] = React.useState();
    // @ts-ignore
    const forceUpdate = React.useCallback(() => updateState({}), []);

    // Dimensions
    const width = 15;
    const height = 10;

    // Goal
    const goal = {xPos: 14, yPos: 9}

    const [mapState, setMapState] = useState(new PathfinderMap(width, height, goal))

    return (<div className={"bg-purple-500/10 min-w-[100vw] min-h-[100vh]"}>
        <PageHeader>
            Pathfinder
        </PageHeader>
        <button className={"bg-purple-500/20 w-24 h-24"}
                onClick={(e) => {
                    setMapState(mapState.tick())
                    forceUpdate()
                }}>Tick
        </button>
        <PathfinderGrid mapState={mapState} setMapState={setMapState}/>
    </div>)
}