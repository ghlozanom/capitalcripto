
import {MDCTopAppBar} from '@material/top-app-bar/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

function goTo() {
    alert( 'Hello, world!' );
}

module.exports = {
    goTo: goTo,
  };