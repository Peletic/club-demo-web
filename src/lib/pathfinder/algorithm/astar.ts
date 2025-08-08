import {CellState, Coordinate} from "@/lib/pathfinder";
import {findByState} from "@/lib/pathfinder/algorithm/utils";

export function astar(map: { state: CellState; xPos: number, yPos: number }[][]) {
    const stateWeights = {
        wall: 100,
        occupied: 0,
        blank: 0,
        walked: 0,
        goal: 0
    }

    const workingMap = [...map].flatMap((el) => el)
    const currentPos: Coordinate = findByState("occupied", map)
    const goalPos: Coordinate = findByState("goal", map)


    workingMap.splice(workingMap.indexOf({
        state: "occupied",
        ...currentPos
    }), 1)
    let current = {state: "occupied", ...currentPos}
    let currentScore = 9999
    while (workingMap.length > 0) {
        for (let neighbor of getOpenList({...current}, workingMap)) {
            const distance = getDistance(neighbor, goalPos)
            const weight = stateWeights[neighbor.state]
            const score = distance + weight
            if (currentScore > score) {
                current = neighbor
                currentScore = score
            }
        }
        break
    }

    console.log(JSON.stringify(current))
    return current
}

function getDistance(pointA, pointB) {
    return Math.abs(pointA.xPos - pointB.xPos) + Math.abs(pointA.yPos - pointB.yPos)
}

function getOpenList(current, map) {
    const openList = [current]
    for (const el of map) {
        if (Math.abs(el.xPos - current.xPos) <= 1 && Math.abs(el.yPos - current.yPos) <= 1) {
            if (el.xPos == current.xPos && el.yPos == current.yPos) continue
            openList.push(el)
        }
    }

    return openList.toSpliced(0, 1)
}