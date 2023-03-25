import React from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./Home.css";

function Home() {
  return (
    <div className="Home_Wrapper">
      <div className="Card_container">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  );
}

export default Home;
