import Carousel from './carousel';
import React from 'react';
import ReactDOM from 'react-dom';

const images = [
  { name: 'pikachu', imageUrl: 'images/pickachu.png' },
  { name: 'cubone', imageUrl: 'images/cubone.png' },
  { name: 'charmander', imageUrl: 'images/charmander.png' },
  { name: 'squirtle', imageUrl: 'images/squirtle.png' },
  { name: 'bulbasaur', imageUrl: 'images/bulbasaur.png' }
];

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images}/>);
