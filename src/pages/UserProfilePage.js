import React, { useContext, useEffect } from "react";
import axios from "axios";
import { FavoritePokemonContext } from "../context/FavoritePokemonContext";
import PokemonCard from "../components/PokemonCard";
import styles from "./UserProfilePage.module.css";

const userName = localStorage.getItem("user");

const UserProfilePage = () => {
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
    <div className={styles.container}>
      <h1>Meus Pokémons Favoritos</h1>
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
    </div>
  );
};

export default UserProfilePage;