import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import PokemonCard from "../components/PokemonCard";
import Navbar from "../components/Navbar";

import { FavoritePokemonContext } from "../context/FavoritePokemonContext";

import styles from "./UserProfilePage.module.css";

const UserProfilePage = () => {
  const userName = localStorage.getItem("user");

  const { favoritePokemons, setFavoritePokemons } = useContext(
    FavoritePokemonContext
  );

  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/users/${userName}`)
      .then((res) => {
        setFavoritePokemons(res.data.pokemons);
      });
  }, [favoritePokemons]);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Meus Pokémons Favoritos</h1>
        {favoritePokemons.length !== 0 ? (
          <div className={styles.catalog}>
            {favoritePokemons.map((favPokemon) => (
              <PokemonCard
                key={favPokemon.id}
                id={favPokemon.id}
                img={favPokemon.image_url}
                name={favPokemon.name}
                number={favPokemon.number}
                kind={favPokemon.kind}
                height={favPokemon.height}
                weight={favPokemon.weight}
              />
            ))}
          </div>
        ) : (
          <>
            <h2 className={styles.emptyList}>Nenhum Pokémon Favorito</h2>
            <Link to="/catalog" className={styles.catalogLink}>
              Pokémons
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default UserProfilePage;
