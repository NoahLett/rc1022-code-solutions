import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokemonList(props) {
  const listItems = pokedex.map(pokemon =>
    <li key={pokemon.name.toString()}>{pokemon.name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const element = (
  <PokemonList/>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(element);
