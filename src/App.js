import React, { useState, useEffect} from "react";
function App() {

  const urlInitial = 'https://pokeapi.co/api/v2/pokedex/2'

  const [pokedex, setPokedex] = useState();

  const fecthPokemon=(url)=>{
    fetch(url)
    .then(res =>res.json())
    //.then(data => console.log(data.pokemon_entries))
    .then(data => setPokedex(data.pokemon_entries))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    fecthPokemon(urlInitial)
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
