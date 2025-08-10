'use client'
import React from "react";

export default function PathfinderGridCell({mapState, xPos, yPos}) {

    const stateClasses = {
        blank: "bg-white/60",
        occupied: "bg-green-400/60",
        wall: "bg-blue-600/60",
        goal: "bg-yellow-300/60",
        walked: "bg-red-300/60",
        met: "bg-orange-300"
    }

    // Forcibly rerendering
    const [, updateState] = React.useState();
    // @ts-ignore
    const forceUpdate = React.useCallback(() => updateState({}), []);

    return (
        <div className={"text-black w-full aspect-square rounded-sm select-none " + stateClasses[mapState.getCellState({
            xPos,
            yPos
        })]}
             onMouseEnter={
                 (e) => {
                     if (e.buttons === 1) {
                         if (mapState.getCellState({xPos, yPos}) == "blank") {
                             mapState.setCellState({xPos, yPos}, "wall")
                         }
                         forceUpdate()
                     } else if (e.buttons === 2) {
                         if (mapState.getCellState({xPos, yPos}) == "wall") {
                             mapState.setCellState({xPos, yPos}, "blank")
                             forceUpdate()
                         }
                     }
                 }}

             onMouseDown={
                 () => {
                     if (mapState.getCellState({xPos, yPos}) == "blank") {
                         mapState.setCellState({xPos, yPos}, "wall")
                         forceUpdate()
                     }
                 }
             }

             onAuxClick={() => {
                 if (mapState.getCellState({xPos, yPos}) == "wall") {
                     mapState.setCellState({xPos, yPos}, "blank")
                     forceUpdate()
                 }
             }}
        >
            {mapState.getCellState({xPos, yPos})}
        </div>
    )
}