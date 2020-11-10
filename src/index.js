import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

function App() {
  const [pokedex,setPokedex]=useState([]);
  const [wildPokemon,setWildPokemon]=useState({});

  useEffect(() => {
    encounterWildPokemon()
  },[])

  const pokeId=() => {
    const min=Math.ceil(1)
    const max=Math.floor(151)
    return Math.floor(Math.random()*(max-min+1)+min
  }

  const encounterWildPokemon=() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/'+pokeId())
      .then(response => {
        console.log(response.data);
        setWildPokemon(response.data);
      })
  }

  return (
    <div className="app-wrapper">
      <h1>App</h1>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));


