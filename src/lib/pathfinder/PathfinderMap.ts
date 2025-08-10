import {CellState, Coordinate} from "@/lib/pathfinder/index";
import {astar} from "@/lib/pathfinder/algorithm/astar";
import {findByState} from "@/lib/pathfinder/algorithm/utils";
import {sleep} from "@/lib/pathfinder/utils";

export default class PathfinderMap {
    map: { state: CellState; xPos: number, yPos: number}[][] = []

    constructor(width: number, height: number, goal: Coordinate, origin: Coordinate = {xPos: 0, yPos: 0}, walls?: Coordinate[]) {

        for (let x = 0; x < width; x++) {
            console.log("test")
            this.map[x] = []
            for (let y = 0; y < height; y++) {
                this.map[x][y] = {
                    state: "blank",
                    xPos: x,
                    yPos: y
                }
            }
        }

        console.log(JSON.stringify(this.map))

        if (walls) {
            for (const wall of walls) {
                this.setCellState(wall, "wall")
            }
        }
        this.setCellState(origin, "occupied")
        this.setCellState(goal, "goal")
    }

    setCellState(coordinate: Coordinate, newState: CellState) {
        this.map[coordinate.xPos][coordinate.yPos].state = newState
        console.log(this.map[coordinate.xPos][coordinate.yPos])

    }

    getCellState(coordinate: Coordinate): CellState {
        return this.map[coordinate.xPos][coordinate.yPos].state
    }

    tick() {
        console.log("tock")
        const step = astar(this.map)
        const last = findByState("occupied", this.map)
        this.setCellState(last, "walked")
        this.setCellState({xPos: step.xPos, yPos: step.yPos}, "occupied")
        return this
    }

    async cycle(tps: number, updateState?: (newState : PathfinderMap) => void, forceRefresh? : () => void) {
        const timeout = 75;
        const sleepCycle = 1000/tps

        const goalCoords = findByState("goal", this.map)

        let cycleNum = 0;
        let goalMet = false

        while (cycleNum <= timeout && !goalMet) {
            this.tick()
            if (updateState) updateState(this)
            if (forceRefresh) forceRefresh()

            const occupied = findByState("occupied", this.map)

            if (occupied.xPos == goalCoords.xPos && occupied.yPos == goalCoords.yPos) goalMet = true

            await sleep(sleepCycle)
        }
    }

}