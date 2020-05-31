import React, { useState, useEffect } from "react";

const KindRenderer = (props) => {
  const [kinds, setKind] = useState([]);

  useEffect(() => {
    setKind(props.kind.split(";"));
  }, []);

  return (
    <div>
      {kinds.map((kind) => (
        <img src={require(`../assets/icons/${kind}-kind-icon.png`)} />
      ))}
    </div>
  );
};

export default KindRenderer;
