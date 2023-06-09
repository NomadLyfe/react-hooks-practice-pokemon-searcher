import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonCollection, setPokemonCollection] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemonCollection(data));
  }, [])

  if (!pokemonCollection) return <p>Loading...</p>
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonCollection={pokemonCollection} setPokemonCollection={setPokemonCollection} />
      <br />
      <Search pokemonCollection={pokemonCollection} setPokemonCollection={setPokemonCollection} />
      <br />
      <PokemonCollection pokemonCollection={pokemonCollection} setPokemonCollection={setPokemonCollection} />
    </Container>
  );
}

export default PokemonPage;
