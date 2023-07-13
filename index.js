const express=require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/userRoutes")
require("dotenv").config()
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())

app.use("/users",userRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to the db")
        console.log(`server is runnig at port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})
