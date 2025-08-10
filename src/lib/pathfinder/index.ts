export type Coordinate = {
    xPos: number,
    yPos : number
}

export type CellState = "blank" | "occupied" | "wall" | "goal" | "walked" | "met"