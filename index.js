const cardFuaGra = document.querySelector('#card-fua-gra');
const cardFish = document.querySelector('#card-fish');
const cardChicken = document.querySelector('#card-chicken');
const bgFuaGra = document.querySelector('#card__bg-fua-gra');
const bgFish = document.querySelector('#card__bg-fish');
const bgChicken = document.querySelector('#card__bg-chicken');

const fuaGra = new Card(cardFuaGra, bgFuaGra, cardText, dataFuaGra, color);
const fish = new Card(cardFish, bgFish, cardText, dataFish, color);
const chicken = new Card(cardChicken, bgChicken, cardText, dataChicken, color);

fuaGra.setEventListeners();
fish.setEventListeners();
chicken.setEventListeners();
