'use client'
import PathfinderGridCell from "@/components/pathfinder/PathfinderGridCell";

export default function PathfinderGrid({mapState, setMapState}) {
    // Dimensions
    const width = 15;
    const height = 10;

    // Goal
    const goal = {xPos: 14, yPos: 9}

    return (<div className={`grid grid-cols-1 gap-2`} style={{gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${height}, minmax(0,1fr))`}}>

        {mapState.map[0].map((col, y) => mapState.map.flatMap((row, x) => (
            <PathfinderGridCell key={`${x},${y}`} mapState={mapState} xPos={x} yPos={y}/>)))
        }
    </div>)
}