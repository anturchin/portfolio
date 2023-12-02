import { createProductsCard } from '../products/products'

export const filter = () => {

	const menuItem = document.querySelectorAll('.menu-navigate__item');
	const btnCoffee = document.querySelector('#coffee');
	const btnTea = document.querySelector('#tea');
	const btnDessert = document.querySelector('#dessert');

	const onChangeFilter = (event, btn) => {

		btn.addEventListener(event, function (){
			menuItem.forEach(item => item.classList.remove('menu-navigate__item_active'));
			this.classList.add('menu-navigate__item_active');
			createProductsCard(this.id);
		})

	}

	onChangeFilter('click', btnCoffee);
	onChangeFilter('click', btnTea);
	onChangeFilter('click', btnDessert);

}