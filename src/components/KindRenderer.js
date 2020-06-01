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
        <img
          className={styles.kindIcon}
          src={require(`../assets/icons/${kind}-kind-icon.png`)}
        />
      ))}
    </div>
  );
};

export default KindRenderer;
