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

  const encounterWildPokemon=() => {
    axios.get('https://pokeapi.co/api/v1/pokemon/151');
  }

  return (
    <div className="app-wrapper">
      <h1>App</h1>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));


