import {CellState, Coordinate} from "@/lib/pathfinder";

export function findByState(state : CellState, map : { state: CellState; }[][]) : Coordinate {
    let xPos = 0;
    let yPos = 0;
    for (const row of map) {
        for (const cell of row) {
            if (cell.state == state) return {xPos, yPos}
            yPos++
        }
        yPos = 0
        xPos++
    }

    return {xPos: -1, yPos: -1}
}