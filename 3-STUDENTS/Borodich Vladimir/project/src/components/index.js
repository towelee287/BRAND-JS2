import Basket from './basket.js';
import Catalog from './catalog.js';

export default () => {
    let container = document.querySelector('#prod');
    container ? new Catalog('https://raw.githubusercontent.com/wowankz/static/master/shop/models/prod.json', container) : '';

    container = document.querySelector('#cat');
    container ? new Catalog('https://raw.githubusercontent.com/wowankz/static/master/shop/models/cat.json', container) : '';

    container = document.querySelector('#like');
    container ? new Catalog('https://raw.githubusercontent.com/wowankz/static/master/shop/models/like.json', container) : '';

    const basket = new Basket();
}