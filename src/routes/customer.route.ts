import express from "express"
import customerController from "../controllers/customer.controller"
const customerRoutes = express.Router()

customerRoutes.get('/', customerController.getCustomers)
customerRoutes.get('/:id', customerController.getCustomerById)
customerRoutes.post('/', customerController.createCustomer)
customerRoutes.put('/:id', customerController.updateCustomer)
customerRoutes.delete('/:id', customerController.deleteCustomer)

export default customerRoutes