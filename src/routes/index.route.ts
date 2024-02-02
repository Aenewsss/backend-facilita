import express from "express";
import customerRoutes from "./customer.route";
import calculationRoutes from "./calculation.route";
const routes = express.Router();

routes.use('/customers', customerRoutes)
routes.use('/calculation', calculationRoutes)

export default routes