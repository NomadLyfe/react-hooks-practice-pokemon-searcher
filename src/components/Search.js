import React, { useState } from "react";

function Search({ pokemonCollection, setPokemonCollection }) {
  function handleChange(e) {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => {
      const updatedPokemon = data.filter(pokemon => {
        if (e.target.value === "") {
          return pokemon;
        } else {
          return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase());
        }
      });
      setPokemonCollection([...updatedPokemon]);
    });
  }
  return (
    <div className="ui search">
      <div className="ui icon input" >
        <input className="prompt" onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
