const express = require('express')
const multer = require("multer");
const router = express.Router()

const {UaserSignUp,UserLogin,addPokemon,getPokemon,getPokemonTwo} =require('../controller/userController')
const {verifyUser}=require('../AuthenticationMiddleWear/UserAuth')

var storage = multer.diskStorage({
    destination: "./public/images",
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
const upload = multer({ storage });

//router.post('/signUp',UaserSignUp)

 router.post('/login',UserLogin)

 router.post('/pokemon',upload.single("image"),addPokemon)

 router.get('/pokemon',getPokemon)

//router.get('/pokemon',verifyUser,getPokemon)

 module.exports = router