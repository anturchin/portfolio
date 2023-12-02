const products = require('./data/products.json');

export const createProductsCard = (filter = 'coffee') => {

	const style = {

		MENU_CARD_ITEM: 'menu-card__item',
		MENU_CARD_IMAGE: 'menu-card__image',
		MENU_CARD_TITLE: 'menu-card__title',
		MENU_CARD_TEXT: 'menu-card__text',
		MENU_CARD_PRICE: 'menu-card__price',
		MENU_CARD_ITEM_NONE: 'menu-card__item_none',
	
	}

	const menuWrapper = document.querySelector('.menu-card__layout');
	const btnPagination = document.querySelector('.menu-card__pagination');

	const mediaQuery = window.matchMedia('(max-width: 768px)');

	function handleMediaChange(e) {

		btnPagination.classList.remove('menu-card__pagination_delete');

		const showAllCards = e.matches;

		menuWrapper.innerHTML = '';

		const menuCards = products
			.filter(card => card.category === filter)
			.map((card, i) => {

				const images = require(`../../../img/menu-layout/${card.category}-${i + 1}.jpg`);

				const menuItem = document.createElement('div');

				if (showAllCards) {
					if (i < 4) {
						menuItem.classList.add(style.MENU_CARD_ITEM, card.category, 'fade');
					}
					if (i > 3) {
						menuItem.classList.add(style.MENU_CARD_ITEM, card.category, style.MENU_CARD_ITEM_NONE);
					}
				} else {
					menuItem.classList.add(style.MENU_CARD_ITEM, card.category, 'fade');
				}

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

	handleMediaChange(mediaQuery);	
	mediaQuery.addEventListener('change', handleMediaChange);

	btnPagination.addEventListener('click', function (e) {
		const cards = document.querySelectorAll('.menu-card__item');
		cards.forEach(card => card.classList.remove(style.MENU_CARD_ITEM_NONE));
		this.classList.add('menu-card__pagination_delete');
	})

}