import createCard from '../create/createCard.js';
import PRODUCTS_DB from '../DB/testDb.js';
import {assignId} from '../utility/generateId.js';

const appControl = () => {
  const cardsWrap = document.querySelector('.catalog__cards');

  const outputID =  PRODUCTS_DB.map(elem => assignId(elem));
  const cards = outputID.map(elem => {
    return createCard(elem.href, elem.img, elem.title, elem.price, elem.address, elem.published);
    });

  cardsWrap.innerHTML = '';
  cardsWrap.append(...cards);
};

export default appControl;