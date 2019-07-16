import React from 'react';
import ReactDOM from 'react-dom';
import BeerDog from './components/beerDogApp/beerDogApp';
import './styles/styles.scss';

const appRoot = document.getElementById('app');

ReactDOM.render(<BeerDog />, appRoot);