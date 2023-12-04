import './index.html';
import './menu.html';
import './index.scss';

import { hamburger } from './modules/components/hamburger/hamburger';
import { slider } from './modules/components/slider/slider';
import { createProductsCard } from './modules/components/products/products';
import { filter } from './modules/components/filter/filter';
import { modals } from './modules/components/modals/modals';


window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	hamburger();
	
	try {
		slider();
		
	} catch (error) {
		console.log(error.message);
	}

	try {
		createProductsCard();
	} catch (error) {
		console.log(error.message);
	}

	try {
		filter();
	} catch (error) {
		console.log(error.message);
	}

	try {
		modals();
	} catch (error) {
		console.log(error.message);
	}

})




