import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./PokemonCard.module.css";

const PokemonCard = (props) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/pokemon/${props.name}`);
  }
  return (
    <div onClick={handleClick} className={styles.card}>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name} />
      <p>{props.kind}</p>
    </div>
  );
};

export default PokemonCard;
