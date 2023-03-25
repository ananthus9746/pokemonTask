import React,{useState} from 'react'
import './PokemonCard.css'
import image from '../../ImagesDemo/1_hires.png'

function PokemonCard(obj) {
  console.log("obj..",obj.obj)
  const [Attack,setAttack]=useState(obj.obj.attack)
  return (
    <div className='PokemonCard_wraaper'>
        <div className="card_img">
            <img
              src={
                "http://localhost:5000" +"/images/" + obj?.obj.image
              }
              className="pro_img"
              alt="projectImage"
            />

        </div>
        <div className="card_txts_container">
            <p className='card_name'>{obj.obj.name}</p>
            <p className='card_skills'>Attack:{Attack.map((obj)=>obj)}</p>
            {}
            <p>Feinst Attack,Doom News</p>
            <p className='card_skills'>Abilities:{obj.obj.abilities}</p>
            <p>N/A</p>
        </div>
    </div>
  )
}

export default PokemonCard