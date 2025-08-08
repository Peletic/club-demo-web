'use client'
import {twMerge} from "tailwind-merge";
import React, {useEffect, useState} from "react";

export default function PathfinderGridCell({mapState, xPos, yPos}) {

    const stateClasses = {
        blank: "bg-white",
        occupied: "bg-green-400",
        wall: "bg-blue-600",
        goal: "bg-yellow-300",
        walked: "bg-red-300"
    }

    // Forcibly rerendering
    const [, updateState] = React.useState();
    // @ts-ignore
    const forceUpdate = React.useCallback(() => updateState({}), []);

    return (
        <div className={"text-black " + stateClasses[mapState.getCellState({xPos, yPos})]}
        onClick={
            (e) => {
                e.preventDefault()
                mapState.setCellState({xPos, yPos}, "wall")
                forceUpdate()
            }
        }>
            {mapState.getCellState({xPos, yPos})}
        </div>
    )
}