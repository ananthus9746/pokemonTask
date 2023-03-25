const { addPokemonrHelper, getPokemonrHelper } = require("../helpers/userHelpers")
const user = require('../models/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const pokemon = require('../models/pokemons')




const UaserSignUp = async (req, res) => {
    console.log("UaserSignUp credentials...", req.body)
    // res.status(200).json({ UserToken: "UserToken, user: userName" })

    // try {
    //     const { email, password } = req.body
    //     let newUserName = username.toLowerCase()




    //     const user_email = await user.findOne({ email })
    //     if (user_email) return res.json({ msg: 'This email is already is already exists' })


    //     if (password.length < 6) return res.json({ msg: 'Password must be atleast 6 characters' })


    //     const passwordHash = await bcrypt.hash(password, 10)

    //     let user = new user({
    //         fullname, username: newUserName, email, password: passwordHash
    //     })

    //     await user.save().then(async (result) => {
    //         sendOtp(result, res)
    //         res.json({
    //             msg: 'register success',
    //             user: {
    //                 ...newUser._doc,
    //                 password: ''
    //             }
    //         })

    //     })

    // } catch (error) {
    //     return res.json({ msg: error.message })
    // }
}


const users = [
    {
        id: 1,
        name: "Alice",
        email: "ananthu@gmail.com",
        password: "$2a$12$kPE5ZH/goycj675RkZrxEuabtKIN5RBKZc//vnjQmavqJm29qDhme", // hashed password for "123"
    },
    {
        id: 2,
        name: "Bob",
        email: "sandeep@gmail.com",
        password: "$2a$12$4vG.HCyIZAfzvRpCTliZ9OeVWFsUWiC3IP6xpw/4z4rrrzLvhyQHq", // hashed password for "1234"
    },
];

//{ email: 'sandeep@gmail', password: '1234' }
//{ email: 'sandeep@gmail', Password: '1234' }

const UserLogin = async (req, res) => {
    console.log("login credentials...", req.body)


    const { email, password } = req.body;

    console.log(" email, password", email, password)

    // Find user by email
    const user = users.find((u) => u.email === email);
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_USER_SECRET_KEY, {
        expiresIn: "1h",
    });

    // Set JWT token as HTTP-only cookie
    res.cookie("access_token", token, {
        httpOnly: true,
        maxAge: 3600000, // 1 hour
    });

    console.log("res.cookie..", token)

    console.log("login successful")
    // res.json({ message: "Login successful" });

    res.status(200).json({ message: "Login successful" })


}


const addPokemon = async (req, res) => {
    console.log("addPokemon ctrl ...", req.body)
    const image = req.file?.filename;
    console.log("Imge..", image);


    try {
        addPokemonrHelper(req.body, image).then((updatedProject) => {
            console.log("response", updatedProject)
            res.status(200).json({ updatedProject })
        }).catch((err) => {
            // res.status(500).json({ mess: "server err...", err });
        })
    } catch (err) {
        console.log(err)
    }
}


const getPokemon = async (req, res) => {




    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    console.log("get crtl pokemon..", page, limit, offset)

    try {
        const count = await pokemon.countDocuments();

        const getedPartners = await pokemon.find({}).skip(offset).limit(limit);
        // res.send(data);
        console.log("getedPartners..", getedPartners)
        console.log(count)
        let counted = Math.ceil(count / limit)
        res.status(200).json({ message: " getPokemonr..", getedPartners, totalPages: counted })

    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }

}



const getPokemonTwo = async (req, res) => {
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);

    // Retrieve the data from the database based on the skip and limit values
    // await pokemon.find({}).skip(skip).limit(limit).(err, data) => {
    //   if (err) {
    //     console.error(err);
    //     res.status(500).send('Error retrieving data from database');
    //   } else {

    //     console.log("getPokemonTwo..",data)
    //     res.status(200).json({ message: " getPokemonTwo..", data})

    //   }
    // }

    const data = await pokemon.find({}).skip(skip).limit(limit);

    console.log("getPokemonTwo..", data)
    res.status(200).json({ message: " getPokemonTwo..", data })


};

module.exports = { UaserSignUp, UserLogin, addPokemon, getPokemon, getPokemonTwo }

