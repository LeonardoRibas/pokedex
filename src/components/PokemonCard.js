import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { FavoritePokemonContext } from "../context/FavoritePokemonContext";

import styles from "./PokemonCard.module.css";

import KindRenderer from "../components/KindRenderer";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";

const PokemonCard = (props) => {
  const history = useHistory();

  const { favoritePokemons, setFavoritePokemons } = useContext(
    FavoritePokemonContext
  );

  function handleClick(e) {
    history.push(`/pokemon/${props.name}`);
  }

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

  const mainType = props.kind.split(";")[0];

  const typeClasses = {
    water: styles.pokemonWater,
    fire: styles.pokemonFire,
    grass: styles.pokemonGrass,
    bug: styles.pokemonBug,
    poison: styles.pokemonPoison,
    flying: styles.pokemonFlying,
    normal: styles.pokemonNormal,
    electric: styles.pokemonElectric,
    ground: styles.pokemonGround,
    fighting: styles.pokemonFighting,
    rock: styles.pokemonRock,
    ghost: styles.pokemonGhost,
    psychic: styles.pokemonPsychic,
    fairy: styles.pokemonFairy,
    ice: styles.pokemonIce,
    dragon: styles.pokemonDragon,
    steel: styles.pokemonSteel,
    dark: styles.pokemonDark,
  };

  return (
    <div className={styles.cardContainer}>
      <div className={typeClasses[mainType]}>
        <img onClick={handleClick} src={props.img} alt={props.name} />
      </div>
      <div className={styles.pokemonDescription}>
        <span className={styles.pokemonName}>{props.name}</span>

        <KindRenderer kind={props.kind} />
        {isFavorite ? (
          <div className={styles.Button}>
            <FavoriteTwoToneIcon
              className={styles.unfavoriteButton}
              onClick={() => handleUnfavorite(props.name)}
            />
          </div>
        ) : (
          <div className={styles.Button}>
            <FavoriteTwoToneIcon onClick={() => handleFavorite(props.name)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
