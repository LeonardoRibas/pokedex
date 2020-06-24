import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import PokemonCard from "../components/PokemonCard";
import Navbar from "../components/Navbar";
import Pagination from "@material-ui/lab/Pagination";

import { FavoritePokemonContext } from "../context/FavoritePokemonContext";

import styles from "./Catalog.module.css";

const Catalog = () => {
  const { setFavoritePokemons } = useContext(FavoritePokemonContext);

  const [pokemons, setPokemon] = useState([]);
  const userName = localStorage.getItem("user");
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/users/${userName}`)
      .then((res) => {
        setFavoritePokemons(res.data.pokemons);
      });
  }, [setFavoritePokemons, userName]);

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
      </div>
      <Pagination
        className={styles.pagination}
        count={33}
        size="large"
        shape="rounded"
        siblingCount={2}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Catalog;
