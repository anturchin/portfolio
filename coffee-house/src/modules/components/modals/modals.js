
const products = require('../products/data/products.json');


export const modals = () => {

	const triggerModal = document.querySelectorAll('[data-modal]');
	const modal = document.querySelector('.modal');

	modal.classList.add('fade');

	function createModalCard(cardProduct, pathImg) {

		const title = modal.querySelector('.modal__title');
		const description = modal.querySelector('.modal__descr');
		const sizeList = modal.querySelector('[data-sizes]');
		const sizeItem = sizeList.querySelectorAll('.tabs__item');
		const additivesList = modal.querySelector('[data-additives]');
		const additivesItem = additivesList.querySelectorAll('.tabs__item');
		const price = modal.querySelector('.modal__price');

		modal.querySelector('img').src = pathImg;

		title.textContent = cardProduct.name;
		description.textContent = cardProduct.description;

		const sizeArray = Object.entries(cardProduct.sizes);
		const additivesArray = Object.entries(cardProduct.additives);

		function setValueInput(inputList, addArr) {

			inputList.forEach((item, i) => {
				
				const input = item.querySelector('input');
				
				if(input.getAttribute('type') === 'radio'){
					item.querySelector('span').textContent = addArr[i][0].toLocaleUpperCase();
				} 
				
				if(input.getAttribute('type') === 'checkbox'){
					item.querySelector('span').textContent = +addArr[i][0] + 1;
				} 

				input.value = addArr[i][1][input.name];
				item.querySelector('p').textContent = addArr[i][1][input.name];
				item.dataset.productId = cardProduct.id;

			})

		}

		setValueInput(sizeItem, sizeArray);
		setValueInput(additivesItem, additivesArray);

		price.textContent = `$${cardProduct.price}`;

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
			document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);
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