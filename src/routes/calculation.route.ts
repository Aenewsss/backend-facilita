import express from "express";
import calculationController from "../controllers/calculation.controller";
const calculationRoutes = express.Router()

calculationRoutes.get('/shortest-path',calculationController.getShortestPath)

export default calculationRoutes