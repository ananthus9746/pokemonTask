import React from 'react'
import './PokemonCard.css'
import image from '../../ImagesDemo/1_hires.png'

function PokemonCard() {
  return (
    <div className='PokemonCard_wraaper'>
        <div className="card_img">
            <img src={image} alt="" />
        </div>
        <div className="card_txts_container">
            <p className='card_name'>Absol G</p>
            <p className='card_skills'>Attack:</p>
            <p>Feinst Attack,Doom News</p>
            <p className='card_skills'>Abilities:</p>
            <p>N/A</p>
        </div>
    </div>
  )
}

export default PokemonCard