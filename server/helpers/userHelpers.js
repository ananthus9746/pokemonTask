const pokemon = require('../models/pokemons')

const addPokemonrHelper = async (data, image) => {

    try {
        return new Promise(async (resolve, reject) => {
            console.log(" addPokemonrHelper promis ...",data,data )

            var pokemons = new pokemon({
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

const getPokemonrHelper = async ( page, limit) => {
    console.log("getPokemonrHelper  page, limit ", page, limit)
    

    const startIndex = (page || 1 - 1) * limit || 10;
    const endIndex = page || 1 * limit || 10;

    try {
        return new Promise(async (resolve, reject) => {
            // const data = await Data.find().skip(startIndex).limit(limit).exec();
            await pokemon.find({})
            .skip(startIndex).limit(limit).then((Pokemons) => {
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