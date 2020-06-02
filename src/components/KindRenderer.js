import React, { useState, useEffect } from "react";

import styles from "./KindRenderer.module.css";

const KindRenderer = (props) => {
  const [kinds, setKind] = useState([]);

  useEffect(() => {
    setKind(props.kind.split(";"));
  }, []);

  return (
    <div className={styles.kindContainer}>
      {kinds.map((kind) => (
        <div className={styles.kindElement}>
          <img
            className={props.big ? styles.bigKindIcon : styles.kindIcon}
            src={require(`../assets/icons/${kind}-kind-icon.png`)}
          />
          {props.big && <span>{kind}</span>}
        </div>
      ))}
    </div>
  );
};

export default KindRenderer;
