import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonPage = (props) => {
  const [pokemon, setPokemon] = useState({});

  const fetchPokemon = () => {
    let name = props.match.params.name;
    console.log(props);
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons/${name}`)
      .then((res) => {
        setPokemon(res.data);
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="pokemon">
      <img src={pokemon.image_url} alt="" />
      <div className="pokemonName">{pokemon.name}</div>
      <div className="pokemonKind">{pokemon.kind}</div>
      <div className="pokemonWeight">{pokemon.weight}</div>
      <div className="pokemonHeight">{pokemon.height}</div>
    </div>
  );
};

export default PokemonPage;
