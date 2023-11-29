import './index.html';
import './menu.html';
import './index.scss';

import { hamburger } from './modules/hamburger';

window.addEventListener('DOMContentLoaded', () => {

	'use strict';
	hamburger('.header__navigate', '.navigate__item', '.hamburger');

})




