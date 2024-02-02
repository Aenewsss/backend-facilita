import { Request, Response } from "express"
import customerService from "../services/customer.service"
import calculationService from "../services/calculation.service"

class CalculationController {
    async getShortestPath(req: Request, res: Response) {
        try {
            const customers = await customerService.getAllCustomers()

            const result = calculationService.getShortestPath(customers)
            
            return res.json({result})
        } catch (error) {
            return res.json({ error })
        }
    }
}

export default new CalculationController()