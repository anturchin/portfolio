
const products = require('../products/data/products.json');


export const modals = () => {

	const triggerModal = document.querySelectorAll('[data-modal]');
	const modal = document.querySelector('.modal');

	modal.classList.add('fade');

	function createModalCard(cardProduct, pathImg) {

		const title = modal.querySelector('.modal__title');
		const description = modal.querySelector('.modal__descr');
		const sizeList = modal.querySelector('#sizeList');
		const sizeItem = sizeList.querySelectorAll('.tabs__item');
		const additivesList = modal.querySelector('#additivesList');
		const additivesItem = additivesList.querySelectorAll('.tabs__item');
		const price = modal.querySelector('.modal__price');

		modal.querySelector('img').src = pathImg;

		title.textContent = cardProduct.name;
		description.textContent = cardProduct.description;

		const sizeArray = Object.entries(cardProduct.sizes);
		const additivesArray = Object.entries(cardProduct.additives);

		sizeItem.forEach((size, i) => {
			size.querySelector('span').textContent = sizeArray[i][0].toLocaleUpperCase();
			size.querySelector('input').value = sizeArray[i][1].size;
			size.querySelector('p').textContent = sizeArray[i][1].size;
		})

		additivesItem.forEach((additives, i) => {
			additives.querySelector('span').textContent = +additivesArray[i][0] + 1;
			additives.querySelector('input').value = additivesArray[i][1].name;
			additives.querySelector('p').textContent = additivesArray[i][1].name;
		})

		price.textContent = cardProduct.price;

		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.classList.add('hidden');

	}

	function getDataCard(id) {
		const card = products.filter(item => item.id === id)[0];
		return card;
	}

	function showModal(card) {

		const cardID = card.getAttribute('data-card-id');
		const pathImg = card.querySelector('img').src;
		const cardProduct = getDataCard(+cardID);

		createModalCard(cardProduct, pathImg);

	}

	function closeModal(e) {

		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			modal.classList.add('hide');
			modal.classList.remove('show');
			document.body.classList.remove('hidden');
		}
	}

	triggerModal.forEach(trigger => {
		trigger.addEventListener('click', () => {
			showModal(trigger);
		});
	})

	modal.addEventListener('click', closeModal)

}