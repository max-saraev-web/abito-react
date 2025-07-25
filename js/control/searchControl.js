import renderCards from '../render/renderCards.js';

const searchControl = () => {
  const form = document.querySelector('.search-box');
  form.addEventListener('submit', ev => {
  const target = ev.target;
  ev.preventDefault();
  const formData = new FormData(target);
  const data = Object.fromEntries(formData);
  target.reset();

  renderCards(data.mainSearch);
});
};

export default searchControl;