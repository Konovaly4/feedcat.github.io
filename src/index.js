import './style.css';
import Card from './scripts/card';
import {cardText, dataFuaGra, dataFish, dataChicken, color} from './scripts/cardData';

import background from './images/background.png';
import cat from './images/cat.png';

const images = [
  {name: 'background', link: background},
  {name: 'cat', link: cat}
]

const cardFuaGra = document.querySelector('#card-fua-gra');
const cardFish = document.querySelector('#card-fish');
const cardChicken = document.querySelector('#card-chicken');

const fuaGra = new Card(cardFuaGra, cardText, dataFuaGra, color);
const fish = new Card(cardFish,cardText, dataFish, color);
const chicken = new Card(cardChicken, cardText, dataChicken, color);

fuaGra.default();
fish.selected();
chicken.disabled();
