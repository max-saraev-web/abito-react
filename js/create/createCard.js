import {generateId} from '../utility/generateId.js';

const createCard = (href, img, title, price, address, date) => {
  const card = document.createElement('a');
  card.classList.add('card');
  card.dataset.key = generateId();
  card.href = href;
  
  const picture = document.createElement('div');
  picture.classList.add('card__img');

  const realPic = document.createElement('img');
  realPic.src = img;
  realPic.alt = 'Заглушка';

  const h5 = document.createElement('h5');
  h5.classList.add('card__title');
  h5.textContent = title;

  const strong = document.createElement('strong');
  strong.classList.add('card__price');
  strong.textContent = price;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card__info');

  const spanAddress = document.createElement('span');
  spanAddress.classList.add('card__address');
  spanAddress.textContent = address;

  const spanPublished = document.createElement('span');
  spanPublished.classList.add('card__date');
  spanPublished.textContent = date;

  picture.append(realPic);
  cardInfo.append(spanAddress, spanPublished);
  card.append(picture, h5, strong, cardInfo);
  return card;
};

export default createCard;