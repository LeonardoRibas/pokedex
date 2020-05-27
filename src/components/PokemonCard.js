import React from "react";
import axios from "axios";

import styles from "./PokemonCard.module.css";

const PokemonCard = (props) => {
  const handleFavorite = (pokemonName) => {
    const userName = localStorage.getItem("user");
    axios.post(
      `https://pokedex20201.herokuapp.com/users/${userName}/starred/${pokemonName}`
    );
  };

  return (
    <div className={styles.card}>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name} />
      <p>{props.kind}</p>
      <button onClick={() => handleFavorite(props.name)}>Favoritar</button>
    </div>
  );
};

export default PokemonCard;
