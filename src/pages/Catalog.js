import React, { useState, useEffect } from "react";

import axios from "axios";

import PokemonCard from "../components/PokemonCard";

import styles from "./Catalog.module.css";

const Catalog = () => {
  const [pokemons, setPokemon] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons?page=${page}`)
      .then((res) => {
        setPokemon(res.data.data);
        console.log(res.data);
      });
  }, [page]);

  return (
    <div className={styles.container}>
      <div className={styles.catalog}>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            img={pokemon.image_url}
            name={pokemon.name}
            number={pokemon.number}
            kind={pokemon.kind}
            height={pokemon.height}
            weight={pokemon.weight}
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
  );
};

export default Catalog;
