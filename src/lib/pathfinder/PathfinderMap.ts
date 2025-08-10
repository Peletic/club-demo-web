import {CellState, Coordinate} from "@/lib/pathfinder/index";
import {astar} from "@/lib/pathfinder/algorithm/astar";
import {findByState} from "@/lib/pathfinder/algorithm/utils";
import {sleep} from "@/lib/pathfinder/utils";

export default class PathfinderMap {
    map: { state: CellState; xPos: number, yPos: number}[][] = []

    constructor(width: number, height: number, goal: Coordinate, origin: Coordinate = {xPos: 0, yPos: 0}, walls?: Coordinate[]) {
        console.log("Constructing new pathfinder map")
        for (let x = 0; x < width; x++) {
            this.map[x] = []
            for (let y = 0; y < height; y++) {
                this.map[x][y] = {
                    state: "blank",
                    xPos: x,
                    yPos: y
                }
            }
        }

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

    }

    getCellState(coordinate: Coordinate): CellState {
        return this.map[coordinate.xPos][coordinate.yPos].state
    }

    tick() {
        const step = astar(this.map)
        const last = findByState("occupied", this.map)
        this.setCellState(last, "walked")

        if (step.state == "goal") {
            this.setCellState({xPos: step.xPos, yPos: step.yPos}, "met")
            return this
        }

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

            const occupied = findByState("met", this.map)
            if (occupied.xPos != -1 && occupied.yPos != -1) goalMet = true

            cycleNum++
            await sleep(sleepCycle)
        }
    }

}