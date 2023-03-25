const Pokemons = require('../models/pokemons')

const addPokemonrHelper = async (data, image) => {

    try {
        return new Promise(async (resolve, reject) => {
            console.log(" addPokemonrHelper promis ...",data,data )

            const pokemons = new Pokemons({
                name:data.name,
                attack:data.attack,
                abilities:data.abilities,
                image
            })

            await pokemons.save().then((pokemons) => {
                console.log("saved pokemons..", pokemons)
                resolve({ pokemon: "pokemons added sucessfully.." })
            })
        })
    }
    catch (err) {
        console.log(err)
    }

}

const getPokemonrHelper = async (startIndex,endIndex,limit) => {
    console.log("getPokemonrHelper ",startIndex,endIndex,limit)
    try {
        return new Promise(async (resolve, reject) => {
            // const data = await Data.find().skip(startIndex).limit(limit).exec();
            await Pokemons.find({})
            .skip(startIndex).
            limit(limit)
            .then((Pokemons) => {
                console.log("getedPartners..", Pokemons)
                resolve(Pokemons)
            })
        })
    }
    catch (err) {
        console.log(err)
    }
}


module.exports = {addPokemonrHelper,getPokemonrHelper}