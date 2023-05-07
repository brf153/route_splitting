const express = require("express")
const app = express()
const userRouter = require("./routes/user.js")
const {config} = require("dotenv")

config({
    path:"./data/config.env"
})

//using Middleware to access json data from postman
app.use(express.json());
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("Nice working")
})


module.exports = app