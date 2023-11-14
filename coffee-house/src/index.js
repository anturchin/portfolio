import './index.html';
import './menu.html';
import './index.scss';
import { slider } from './modules/slider';

const sum = (a, b) => a + b;

console.log(sum(5, 23));
console.log(sum(55, 23));
slider('i am slider').then(t => console.log(t));