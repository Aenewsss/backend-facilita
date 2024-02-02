import express from "express";
import customerRoutes from "./customer.route";
const routes = express.Router();

routes.use('/customers', customerRoutes)

export default routes