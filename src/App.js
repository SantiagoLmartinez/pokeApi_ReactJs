import React, { useState, useEffect} from "react";
// import styled from 'styled-components';
import './App.css';

import NavbarComp from "./Components/Navbar";
import PokemonComp from "./Components/Pokemon";
function App() {

//  const urlInitial = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
  const urlInitial = 'https://pokeapi.co/api/v2/pokemon/?limit=151'

  const [pokemon, setPokemon] = useState([]);

  const fecthPokemon=(url)=>{
    fetch(url)
    .then(res =>res.json())
    //.then(data => console.log(data.results))
    .then(data => setPokemon(data.results))
    .catch(error => console.log(error))
  }
  
  useEffect(() => {
    fecthPokemon(urlInitial)
  }, []);

  return (
    <div className="App">
      <NavbarComp/> 
      <div className="container">
      <PokemonComp pokedex={pokemon}/>
      </div> 
    </div>
  );
}

export default App;

// const AppStyled = styled.div`
// .pkm-container{

// }

// `