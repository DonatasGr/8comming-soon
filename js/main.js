import { renderSocials } from "./components/socials/renderSocials.js"
import { socialsData } from './data/socialsData.js';
import { renderClock } from './components/clock/renderClock.js';

import { renderAllProgressBars } from './components/progress-bar/renderAllProgressBars.js';
import { progressBarData } from './data/progressBarData.js';

renderSocials('footer > .row', socialsData);

renderClock('.clock');

renderAllProgressBars(progressBarData);

/*renderProgressBar('.column.right', 'Lietuva', 100);*/

// const h1DOM = document.querySelector('h1');

// const inputDOM = document.querySelectorAll('main .form > input');

// console.log(h1DOM);
// console.log(inputDOM);

// h1DOM.innerText = 'Elgreko';