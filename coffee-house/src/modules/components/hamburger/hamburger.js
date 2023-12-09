
export const hamburger = () => {

	const navigate = document.querySelector('.header__navigate');
	const navigateItem = document.querySelectorAll('.navigate__item');
	const hamburger = document.querySelector('.hamburger');
	
	const toggleHamburger = () => {

		hamburger.classList.toggle('hamburger_active');
		navigate.classList.toggle('header__navigate_active');

		if (hamburger.classList.contains('hamburger_active')) {
			document.body.classList.add('hidden');
		} else {
			document.body.classList.remove('hidden');
		}

	}

	hamburger.addEventListener('click', toggleHamburger);

	navigateItem.forEach(item => {
		item.addEventListener('click', (e) => {

			if (e.target && item.classList.contains('navigate__item_active')) {
				e.preventDefault();
			}

			if (hamburger.classList.contains('hamburger_active')) {
				toggleHamburger();
			}

		})
	})

}