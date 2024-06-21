import React, { useEffect, useState } from "react";
import StarwarsList from './StarwarsList';
import './App.css';

const App = () => {
  const [starWars, setStarWars] = useState([]);
  const[filter, setFilter] = useState('all');


  useEffect(() => {
    const fetchStarWars = async () => {
      const response = await fetch('https://swapi.dev/api/');

      const data = await response.json();
      const swData = await Promise.all(
        data.results.map(async (starWars, index) => {
          const swDetails = await fetch(starWars.url).then((res) => res.json());
          return {
            id: swDetails.id,
            name: swDetails.name,
            type: swDetails.types[0].type.name,
          };
        })
      );
      setStarWars(swData);
    };
    fetchStarWars();
  }, []);
  return (
    <div className="app">
      <h1>STAR WARS COSAS</h1>
      <div className="filter-buttons">
        <button onClick={()=> setFilter('character')}>Personajes</button>
        <button onClick={()=> setFilter('planets')}>Planetas</button>
        <button onClick={()=> setFilter('starShips')}>Naves</button>
        

      </div>
      <starwarsList starWars={starWars} filterStarWars={filter} />
    </div>
  );
};

export default App;
