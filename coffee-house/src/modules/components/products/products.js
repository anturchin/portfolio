const products = require('./data/products.json');

const style = {

	MENU_CARD_ITEM: 'menu-card__item',
	MENU_CARD_IMAGE: 'menu-card__image',
	MENU_CARD_TITLE: 'menu-card__title',
	MENU_CARD_TEXT: 'menu-card__text',
	MENU_CARD_PRICE: 'menu-card__price',

}

export const createProductsCard = () => {

	const menuWrapper = document.querySelector('.menu-card__layout');

	const menuCards = products
		.filter(card => card.category === 'coffee')
		.map((card, i) => {
			
			const images = require(`../../../img/menu-layout/${card.category}-${i + 1}.jpg`);

			const menuItem = document.createElement('div');
			menuItem.classList.add(style.MENU_CARD_ITEM, card.category);

			const menuImage = document.createElement('div');
			menuImage.classList.add(style.MENU_CARD_IMAGE);


			const image = document.createElement('img');
			image.src = images;
			image.alt = `${card.category}-${i + 1}`;
			menuImage.append(image);



			const menuTitle = document.createElement('h3');
			menuTitle.classList.add(style.MENU_CARD_TITLE);
			menuTitle.textContent = card.name;

			const menuText = document.createElement('p');
			menuText.classList.add(style.MENU_CARD_TEXT);
			menuText.textContent = card.description;

			const menuPrice = document.createElement('span');
			menuPrice.classList.add(style.MENU_CARD_PRICE);
			menuPrice.textContent = `$${card.price}`;

			menuItem.append(menuImage);
			menuItem.append(menuTitle);
			menuItem.append(menuText);
			menuItem.append(menuPrice);

			menuWrapper.append(menuItem);

		});

}