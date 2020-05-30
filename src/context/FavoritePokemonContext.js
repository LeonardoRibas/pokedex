import React, { createContext, useState } from "react";

export const FavoritePokemonContext = createContext();

const Provider = (props) => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  return (
    <FavoritePokemonContext.Provider
      value={{ favoritePokemons, setFavoritePokemons }}
    >
      {props.children}
    </FavoritePokemonContext.Provider>
  );
};

export default Provider;
