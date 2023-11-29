
export function hamburger(selectorNavigate, selectorNavigateItem, selectorHamburger,) {

	const navigate = document.querySelector(selectorNavigate);
	const navigateItem = document.querySelectorAll(selectorNavigateItem);
	const hamburger = document.querySelector(selectorHamburger);
	
	function toggleHamburger() {

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