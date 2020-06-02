import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import PokemonCard from "../components/PokemonCard";
import Navbar from "../components/Navbar";

import { FavoritePokemonContext } from "../context/FavoritePokemonContext";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import styles from "./Catalog.module.css";

const Catalog = () => {
  const { favoritePokemons, setFavoritePokemons } = useContext(
    FavoritePokemonContext
  );

  const [pokemons, setPokemon] = useState([]);
  const userName = localStorage.getItem("user");
  const [page, setPage] = useState(1);

  const handleNextPage = () => setPage(page + 1);
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/users/${userName}`)
      .then((res) => {
        setFavoritePokemons(res.data.pokemons);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons?page=${page}`)
      .then((res) => {
        setPokemon(res.data.data);
      });
  }, [page]);

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <Navbar />
      </div>
      <h1 className={styles.title}>Pokémons</h1>
      <div className={styles.catalogContainer}>
        <button className={styles.navigateButton} onClick={handlePreviousPage}>
          <NavigateBeforeIcon />
        </button>
        <div className={styles.catalog}>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              img={pokemon.image_url}
              name={pokemon.name}
              kind={pokemon.kind}
            />
          ))}
        </div>

        <button className={styles.navigateButton} onClick={handleNextPage}>
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default Catalog;
