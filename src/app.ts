import express from "express"
import { config } from "dotenv"
config()
import routes from "./routes/index.route"
import { initializeDb } from "./config/database"
initializeDb()

class AppController {
    express: express.Application

    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json())
    }

    routes() {
        this.express.use(routes)
    }
}

export default new AppController().express