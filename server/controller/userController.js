const { addPokemonrHelper, getPokemonrHelper } = require("../helpers/userHelpers")


const UserLogin = async (req, res) => {
    console.log("login credentials...", req.body)
    try {
        let userName = await admin.findOne({ username: req.body.username })
        if (userName) {
            console.log("finded..", userName)
            const checkPassword = await bcrypt.compare(req.body.password, userName.password)
            if (checkPassword) {

                const id = userName._id
                const UserToken = jwt.sign({ id },
                    process.env.JWT_USER_SECRET_KEY, {
                    expiresIn: "1hr",
                })

                console.log("ress jwt..", userName, UserToken)
                res.status(200).json({ UserToken: UserToken, user: userName })
            } else {

                console.log("wrong password")
                res.status(401).json({ error: "wrong password" })
            }
        }
        else {
            console.log("wrong user name")
            res.status(401).json({ error: "wrong user name" })
        }
    }
    catch (err) {
        console.log("Err", err)
    }
}


const addPokemon = async (req, res) => {
    console.log("addPokemon ctrl ...", req.body)
    // const partnerImage = req.file.filename;
    // const PartnerName = req.body.PartnerName
    // console.log("partner name..", PartnerName);
    // console.log("file partner ctr img..", partnerImage)
    // try {
    //     addPokemonrHelper(PartnerName, partnerImage).then((updatedProject) => {
    //         console.log("add patner hrlp response", updatedProject)
    //         res.status(200).json({ updatedProject })
    //     }).catch((err) => {
    //         // res.status(500).json({ mess: "server err...", err });
    //     })
    // } catch (err) {
    //     console.log(err)
    // }
}


const getPokemon = async (req, res) => {
    // try {
    //     getPokemonrHelper().then((getedPartners) => {
    //         res.status(200).json({ message: " getedPartners..", getedPartners })
    //     })

    // } catch (err) {
    //     console.log("err", err)
    // }

}


module.exports = { addPokemon, getPokemon }

