import createCard from '../create/createCard.js';
import PRODUCTS_DB from '../DB/testDb.js';
import {assignId} from '../utility/generateId.js';

const appControl = () => {
  const cardsWrap = document.querySelector('.catalog__cards');

  const outputID =  PRODUCTS_DB.map(elem => assignId(elem));
  cardsWrap.innerHTML = 'Идёт загрузка!!!';
  Promise.allSettled(outputID.map(elem => {
    return createCard(elem.href, elem.img, elem.title, elem.price, elem.address, elem.published);
    })).then((data) => {
      cardsWrap.innerHTML = '';
      const cards = data.map(elem =>
        elem.reason || elem.value);
      cardsWrap.append(...cards);
    }
    );
};

export default appControl;