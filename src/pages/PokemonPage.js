import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import KindRenderer from "../components/KindRenderer";

import { FavoritePokemonContext } from "../context/FavoritePokemonContext";

import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import styles from "./PokemonPage.module.css";

const PokemonPage = (props) => {
  const username = localStorage.getItem("user");
  const history = useHistory();

  const [pokemon, setPokemon] = useState({ name: props.match.params.name });

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

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <button
          className={styles.backIcon}
          onClick={() => history.push("/catalog")}
        >
          <ArrowBackIcon />
        </button>
        <Navbar />
      </div>
      <div className={styles.pokemonCard}>
        <div className={styles.pokemonAvatar}>
          <h1 className={styles.pokemonName}>{`N° ${pokemon.number}`}</h1>
          <img className={styles.pokemonImage} src={pokemon.image_url} alt="" />
        </div>

        <div className={styles.description}>
          <div className={styles.pokemonName}>{pokemon.name}</div>
          {pokemon.kind ? (
            <KindRenderer kind={pokemon.kind} big={true} />
          ) : null}
          <div className={styles.pokemonWeight}>{pokemon.weight}</div>
          <div className="pokemonHeight">{pokemon.height}</div>

          {isFavorite ? (
            <button
              className={styles.favButton}
              onClick={() => handleUnfavorite(pokemon.name)}
            >
              Desfavoritar
            </button>
          ) : (
            <button
              className={styles.unfavButton}
              onClick={() => handleFavorite(pokemon.name)}
            >
              Favoritar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
