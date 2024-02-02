import express from "express"
import customerController from "../controllers/customer.controller"
const customerRoutes = express.Router()

customerRoutes.get('/', customerController.getUsers)
customerRoutes.get('/:id', customerController.getUserById)
customerRoutes.post('/', customerController.createUser)
customerRoutes.put('/:id', customerController.updateUser)
customerRoutes.delete('/:id', customerController.deleteUser)

export default customerRoutes