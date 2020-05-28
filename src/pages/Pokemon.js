import React from "react";
import axios from "axios";

class Pokemon extends React.Component {
  state = {
    id: undefined,
    name: undefined,
    height: undefined,
    image_url: undefined,
    kind: undefined,
    number: undefined,
    weight: undefined,
  };

  componentDidMount() {
    this.fetchPokemon();
  }
  fetchPokemon() {
    let name = this.props.match.params.name;
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons/${name}`)
      .then((res) => {
        this.setState(res.data);
        console.log(this.state);
      });
  }

  render() {
    return (
      <div className="pokemon">
        <div className="pokemonName">{this.state.name}</div>
        <div className="pokemonKind">{this.state.kind}</div>
        <div className="pokemonWeight">{this.state.weight}</div>
        <img src={this.state.image_url} alt="" />
      </div>
    );
  }
}

export default Pokemon;
