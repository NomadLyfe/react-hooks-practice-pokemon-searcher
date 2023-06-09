import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import PokemonPage from "./PokemonPage";

function PokemonCard({ pokemon }) {
  const [side, setSide] = useState(true);
  function changeSide() {
    setSide(!side);
  }
  return (
    <Card>
      <div onClick={changeSide}>
        <div className="image">
          {side ? <img src={pokemon.sprites.front} alt={pokemon.name} /> : <img src={pokemon.sprites.back} alt={pokemon.name} />}
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
