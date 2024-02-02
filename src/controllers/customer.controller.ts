import { Request, Response } from "express"
import customerService from "../services/customer.service"
import { ICustomer } from "../interfaces/customer.interface"

class CustomerController {
    async getCustomers(req: Request, res: Response) {
        try {
            const result = await customerService.getAllCustomers()
            return res.json({ customers: result })
        } catch (error) {
            return res.json({ error })
        }
    }

    async getCustomerById(req: Request, res: Response) {
        try {
            const result = await customerService.getCustomerById(req.params.id)
            return res.json({ customer: result })
        } catch (error) {
            return res.json({ error })
        }
    }

    async createCustomer(req: Request, res: Response) {
        try {
            const { customer }: { customer: ICustomer } = req.body
            const result = await customerService.createCustomer(customer)
            return res.json({ newCustomer: result })
        } catch (error) {
            return res.json({ error })
        }
    }

    async updateCustomer(req: Request, res: Response) {
        try {
            const { customer }: { customer: ICustomer } = req.body
            const result = await customerService.updateCustomer(req.params.id, customer)
            return res.json({ customerUpdated: result })
        } catch (error) {
            return res.json({ error })
        }
    }

    async deleteCustomer(req: Request, res: Response) {
        try {
            const result = await customerService.deleteCustomer(req.params.id)
            return res.json({ customerDeleted: result })
        } catch (error) {
            return res.json({ error })
        }
    }
}
export default new CustomerController()