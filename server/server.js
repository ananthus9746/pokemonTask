const express = require('express')
const app=express() 
const mongoose =require('mongoose')
const dotenv =require("dotenv")
const morgan=require("morgan")
const cors =require('cors')
const connectDB=require('./config/db')
const path = require('path');

dotenv.config()
mongoose.set('strictQuery', false);


//CONNECTING TO DB
connectDB()

//MIDDLEWEARS
app.use(cors())
app.use(morgan("common"))
app.use(express.json());


app.use('/',(req,res)=>{
    console.log("user login")
    res.json("user login").status(200)
})


app.listen(process.env.PORT,console.log("Server started at port:",process.env.PORT))