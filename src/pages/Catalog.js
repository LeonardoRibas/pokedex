import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import Navbar from "../components/Navbar";
import styles from "./Catalog.module.css";

import { FavoritePokemonContext } from "../context/FavoritePokemonContext";

const Catalog = () => {
  const { favoritePokemons, setFavoritePokemons } = useContext(
    FavoritePokemonContext
  );
  const [pokemons, setPokemon] = useState([]);
  const userName = localStorage.getItem("user");
  const [page, setPage] = useState(1);

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
    <>
      <Navbar />
      <div className={styles.container}>
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
        <div className={styles.buttons}>
          <button
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            Página anterior
          </button>
          <button onClick={() => setPage(page + 1)}>Próxima página</button>
        </div>
      </div>
    </>
  );
};

export default Catalog;
