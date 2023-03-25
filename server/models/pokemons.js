const mongoose = require('mongoose')

const PokemonsSchema=new mongoose.Schema({
    name:{
        type:String
    },
    attack:[{
        type:String
    }],
    abilities:[{
        type:String
    }],
    image:{
        type:String
    },
},{timestamps:true }
)

module.exports= mongoose.model('pokemon',PokemonsSchema)