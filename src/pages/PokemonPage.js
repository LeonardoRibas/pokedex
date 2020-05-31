import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FavoritePokemonContext } from "../context/FavoritePokemonContext";

const PokemonPage = (props) => {
  const [pokemon, setPokemon] = useState({ name: props.match.params.name });

  const username = localStorage.getItem("user");

  const { favoritePokemons, setFavoritePokemons } = useContext(
    FavoritePokemonContext
  );

  const [isFavorite, setIsFavorite] = useState();

  const fetchPokemon = () => {
    let name = props.match.params.name;
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons/${name}`)
      .then((res) => {
        setPokemon(res.data);
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    const isPokemonInFavorites = favoritePokemons.some(
      (favPokemon) => favPokemon.name === pokemon.name
    );
    setIsFavorite(isPokemonInFavorites);
  }, [favoritePokemons]);

  const handleFavorite = (pokemonName) => {
    axios
      .post(
        `https://pokedex20201.herokuapp.com/users/${username}/starred/${pokemonName}`
      )
      .then((res) => {
        setFavoritePokemons(res.data.pokemons);
      });
  };

  const handleUnfavorite = (pokemonName) => {
    axios
      .delete(
        `https://pokedex20201.herokuapp.com/users/${username}/starred/${pokemonName}`
      )
      .then((res) => {
        setFavoritePokemons(res.data.pokemons);
      });
  };

  function printPokemons() {
    console.log(favoritePokemons);
  }

  return (
    <div className="pokemon">
      <img src={pokemon.image_url} alt="" />
      <div className="pokemonName">{pokemon.name}</div>
      <div className="pokemonKind">{pokemon.kind}</div>
      <div className="pokemonWeight">{pokemon.weight}</div>
      <div className="pokemonHeight">{pokemon.height}</div>
      {isFavorite ? (
        <button onClick={() => handleUnfavorite(pokemon.name)}>
          Desfavoritar
        </button>
      ) : (
        <button onClick={() => handleFavorite(pokemon.name)}>Favoritar</button>
      )}
      <button onClick={printPokemons}>aqui</button>
    </div>
  );
};

export default PokemonPage;
