import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import product  from "./routes/product.js"
import order from "./routes/order.js"
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from "./config/db.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express()
dotenv.config({path:path.join(__dirname,"config","config.env")})

//port setup
const PORT = process.env.PORT || 5000

//middleware
app.use(express.json())//to get json data
app.use(cors())//connect with front end

//routes
app.use("/api",product);
app.use("/api/order",order)

app.listen(PORT, (req,res)=>{
  connectDB()
  console.log(`server is running at http://localhost:${PORT}`)
})