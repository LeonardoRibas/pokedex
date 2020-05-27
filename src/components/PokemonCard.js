import React from "react";

import styles from "./PokemonCard.module.css";

const PokemonCard = (props) => {
  return (
    <div className={styles.card}>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name} />
      <p>{props.kind}</p>
    </div>
  );
};

export default PokemonCard;
