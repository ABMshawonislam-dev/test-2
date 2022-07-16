import "dotenv/config"
import express from "express"
import cors from "cors"
import serverRoute from "./routes/serverRoute.js"
import mongoose from "mongoose"

const app = express()
const PORT = process.env.PORT || 5000
const DB = process.env.DB_LOCAL
app.use(express.json())
app.use(cors())

mongoose.connect(DB, () => {
  console.log("mongoDB connected")
})

app.use("/", serverRoute)

app.listen(PORT, () => {
  console.log(`Backend runnig on ${PORT}`)
})
