import React, { useState, useEffect } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
    const data = await response.json();
    setPokemons(data.results.map(p => p.name));
  };

  useEffect(() => {

    fetchPokemons();
  }, []);
  return (
    <div>
      <button onClick={() => fetchPokemons()}>Fetch Pokemon</button>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
