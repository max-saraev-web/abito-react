import createCard from '../create/createCard.js';
import PRODUCTS_DB from '../DB/testDb.js';
import {assignId} from '../utility/generateId.js';

const renderCards = request => {
  const cardsWrap = document.querySelector('.catalog__cards');

  const output = PRODUCTS_DB.filter(obj =>{
    const title = obj.title.toLocaleLowerCase();
    return title.includes(request.toLowerCase()) || obj.price.includes(request)});
  const outputID =  output.map(elem => assignId(elem));
  const cards = outputID.map(elem => {
    return createCard(elem.href, elem.img, elem.title, elem.price, elem.address, elem.date);
    });
  cardsWrap.innerHTML = '';
  cardsWrap.append(...cards);
};

export default renderCards;