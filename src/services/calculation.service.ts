import { ICustomer } from "../interfaces/customer.interface";
import { ILocation } from "../interfaces/location.interface";
import { IPoint } from "../interfaces/point.interface"

class CalculationService {
    getShortestPath(customers: ICustomer[]) {
        const path: IPoint[] = [{ location: { x: 0, y: 0 } }]
        const unvisitedCustomers: IPoint[] = customers.slice().map(el => ({ location: el.location, userId: el.id }))

        while (unvisitedCustomers.length > 1) {
            const lastPoint = path[path.length - 1]
            let nearestPoint!: IPoint
            let shortestDistance: number = Infinity

            for (const point of unvisitedCustomers) {
                const distance = this.mathFormulaToCalcDistance(lastPoint.location, point.location)

                if (distance < shortestDistance) {
                    nearestPoint = { ...point, distanceFromLastPoint: distance }
                    shortestDistance = distance
                }
            }

            path.push(nearestPoint)
            unvisitedCustomers.splice(unvisitedCustomers.indexOf(nearestPoint), 1)
        }

        path.push({ location: { x: 0, y: 0 } })

        return path
    }

    private mathFormulaToCalcDistance(pointA: ILocation, pointB: ILocation) {
        return Number(Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2)).toFixed(2))
    }
}

export default new CalculationService()