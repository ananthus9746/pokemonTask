const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique: true
    },
    password:{
        type:String
    },
},{timestamps:true }
)

module.exports= mongoose.model('user',UserSchema)