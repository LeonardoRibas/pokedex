import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { FavoritePokemonContext } from "../context/FavoritePokemonContext";

import styles from "./PokemonCard.module.css";

const PokemonCard = (props) => {
  const { favoritePokemons, setFavoritePokemons } = useContext(
    FavoritePokemonContext
  );

  const userName = localStorage.getItem("user");

  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => {
    const isPokemonInFavorites = favoritePokemons.some(
      (favPokemon) => favPokemon.name === props.name
    );
    setIsFavorite(isPokemonInFavorites);
  }, [favoritePokemons]);

  const handleFavorite = (pokemonName) => {
    axios
      .post(
        `https://pokedex20201.herokuapp.com/users/${userName}/starred/${pokemonName}`
      )
      .then((res) => {
        setFavoritePokemons(res.data.pokemons);
      });
  };

  const handleUnfavorite = (pokemonName) => {
    axios
      .delete(
        `https://pokedex20201.herokuapp.com/users/${userName}/starred/${pokemonName}`
      )
      .then((res) => {
        setFavoritePokemons(res.data.pokemons);
      });
  };

  return (
    <div className={styles.card}>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name} />
      <p>{props.kind}</p>
      {isFavorite ? (
        <button onClick={() => handleUnfavorite(props.name)}>
          Desfavoritar
        </button>
      ) : (
        <button onClick={() => handleFavorite(props.name)}>Favoritar</button>
      )}
    </div>
  );
};

export default PokemonCard;