'use client'
import PathfinderGridCell from "@/components/pathfinder/PathfinderGridCell";

export default function PathfinderGrid({mapState, setMapState, width, height}) {

    return (<div className={`grid grid-cols-1 gap-1 min-w-[512px] w-[43%] p-4 mx-auto`} style={{gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${height}, minmax(0,1fr))`}} onContextMenu={e => e.preventDefault()}>

        {mapState.map[0].map((col, y) => mapState.map.flatMap((row, x) => (
            <PathfinderGridCell key={`${x},${y}`} mapState={mapState} xPos={x} yPos={y}/>)))
        }
    </div>)
}