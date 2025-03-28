import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"

// Controllers
import places from './controllers/places'

dotenv.config()
const app: Express = express()
const port = process.env.PORT || 3001

// TODO: allow requests from a dynamic URL as this should not be hard-coded
app.use(cors({ origin: 'http://localhost:3000' }))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server")
})

app.get("/places", places)
