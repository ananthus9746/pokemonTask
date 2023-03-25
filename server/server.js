const express = require('express')
const app=express() 
const mongoose =require('mongoose')
const dotenv =require("dotenv")
const morgan=require("morgan")
const cors =require('cors')
const connectDB=require('./config/db')
const path = require('path');
const userRouter=require('./routes/user')

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

dotenv.config()
mongoose.set('strictQuery', false);



//CONNECTING TO DB
connectDB()

//MIDDLEWEARS
app.use(cors())
app.use(morgan("common"))
app.use(express.json());
app.use(cookieParser());
app.use(express.static("files"));




//Routes
app.use('/',userRouter)



app.use('/images',express.static(path.join(__dirname,'public/images')))



app.listen(process.env.PORT,console.log("Server started at port:",process.env.PORT))