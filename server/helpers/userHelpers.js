const Pokemons = require('../models/pokemons')

const addPokemonrHelper = async (PartnerName, partnerImage) => {

    try {
        return new Promise(async (resolve, reject) => {
            console.log(" addPokemonrHelper promis ...", )
            // console.log("partnerImage promise", partnerImage)

            // const partner = new Partner({
            //     PartnerName: PartnerName,
            //     PartnerImage: partnerImage,
            // })

            // await partner.save().then((partner) => {
            //     console.log("saved partner..", partner)
            //     resolve({ partner: "partner added sucessfully.." })
            // })
        })
    }
    catch (err) {
        console.log(err)
    }

}

const getPokemonrHelper = async () => {
    console.log("getPokemonrHelper ")
    try {
        return new Promise(async (resolve, reject) => {

            // await Partner.find({}).then((getedPartners) => {
            //     console.log("getedPartners..", getedPartners)
            //     resolve(getedPartners)
            // })
        })
    }
    catch (err) {
        console.log(err)
    }
}


module.exports = {addPokemonrHelper,getPokemonrHelper}