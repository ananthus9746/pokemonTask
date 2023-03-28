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



module.exports = {addPokemonrHelper}