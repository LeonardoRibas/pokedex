import React from "react";

class Busca extends React.Component {
  render() {
    return (
      <div className="buscaContainer">
        <div>title</div>
        <input type="text" placeholder="Nome do pokemon" />
        <button>Buscar</button>
      </div>
    );
  }
}

export default Busca;
