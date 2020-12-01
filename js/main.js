import { renderSocials } from "./components/socials/renderSocials.js"
import { socialsData } from './data/socialsData.js';
import { renderClock } from './components/clock/renderClock.js';

renderSocials('footer > .row', socialsData);

renderClock('.clock');

// const h1DOM = document.querySelector('h1');

// const inputDOM = document.querySelectorAll('main .form > input');

// console.log(h1DOM);
// console.log(inputDOM);

// h1DOM.innerText = 'Elgreko';