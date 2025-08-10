import {CellState, Coordinate} from "@/lib/pathfinder";
import {findByState} from "@/lib/pathfinder/algorithm/utils";

export function astar(map: { state: CellState; xPos: number, yPos: number }[][]) {
    const stateWeights = {
        wall: 999,
        occupied: 0,
        blank: 1,
        walked: 40,
        goal: -100
    }

    const workingMap = [...map].flatMap((el) => el)

    const goalPos: Coordinate = findByState("goal", map)

    /*workingMap.splice(workingMap.indexOf({
        state: "occupied",
        ...currentPos
    }), 1)*/

    let current = findByState("occupied", map)
    let currentScore = 9999

    while (workingMap.length > 0) {
        //todo: implement backtracking
        console.log(current)
        const neighbors = getOpenList(current, workingMap)
        console.log(neighbors)
        for (let neighbor of neighbors) {

            const distance = getDistance(neighbor, goalPos)
            const weight = stateWeights[neighbor.state]
            const score = distance + weight
            if (currentScore > score) {
                current = neighbor
                currentScore = score
            }

            if (neighbor.state == "goal") {
                console.log(`Goal-neighbor dist ${distance}`)
                current = neighbor
                currentScore = -1000
            }
        }
        break
    }
    console.log(getOpenList(current, workingMap))
    return current
}

function getDistance(pointA: { xPos: number; yPos: number; }, pointB: { xPos: any; yPos: any; }) {
    return Math.abs(pointA.xPos - pointB.xPos) + Math.abs(pointA.yPos - pointB.yPos)
}

function getOpenList(current: { xPos: any; yPos: any; state: CellState; }, map: {
    xPos: number;
    yPos: number;
    state: CellState;
}[]): { xPos: number; yPos: number; state: CellState; }[] {
    const openList = [current]
    for (const el of map) {
        if ((Math.abs(el.xPos - current.xPos) <= 1 && el.yPos == current.yPos) || (Math.abs(el.yPos - current.yPos) <= 1 && el.xPos == current.xPos)) {
            if (el.xPos == current.xPos && el.yPos == current.yPos) continue
            openList.push(el)
        }
    }
    console.log(openList)
    return openList.toSpliced(0, 1)
}