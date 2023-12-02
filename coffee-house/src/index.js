import './index.html';
import './menu.html';
import './index.scss';

import { hamburger } from './modules/components/hamburger/hamburger';
import { slider } from './modules/components/slider/slider';
import { createProductsCard } from './modules/components/products/products';
import { filter } from './modules/components/filter/filter';


window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	hamburger();
	
	try {
		slider();
		
	} catch (error) {
		console.log(error);
	}

	try {
		createProductsCard();
	} catch (error) {
		console.log(error);
	}

	try {
		filter();
	} catch (error) {
		console.log(error);
	}

})




