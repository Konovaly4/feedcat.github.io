const cardFuaGra = document.querySelector('#card-fua-gra');
const cardFish = document.querySelector('#card-fish');
const cardChicken = document.querySelector('#card-chicken');

const fuaGra = new Card(cardFuaGra, cardText, dataFuaGra, color);
const fish = new Card(cardFish,cardText, dataFish, color);
const chicken = new Card(cardChicken, cardText, dataChicken, color);

fuaGra.setEventListeners();
fish.setEventListeners();
chicken.setEventListeners();
