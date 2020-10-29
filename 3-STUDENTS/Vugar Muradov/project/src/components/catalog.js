function createItem(id, name, price, img) {
    return {
        id, name, price, img
    };
};

function initCatalog() {
    let ids = [0, 1, 2, 3, 4, 5, 6, 7]
    let names = ["Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt"];
    let prices = ["52.00", "52.00", "52.00", "52.00", "52.00", "52.00", "52.00", "52.00"];
    let imgs = ["../src/assets/img/feature1.jpg", "../src/assets/img/feature2.jpg", "../src/assets/img/feature3.jpg", "../src/assets/img/feature4.jpg", "../src/assets/img/feature5.jpg", "../src/assets/img/feature6.jpg", "../src/assets/img/feature7.jpg", "../src/assets/img/feature8.jpg"]
    return names.map((name, index) => createItem(ids[index], name, prices[index], imgs[index]));
};

import CatalogItem from './catalogItem.js';

export default class Catalog {
    constructor(basket, container = '#catalog') {
        this.items = [];
        this.basket = null;
        this.container = document.querySelector(container);
        //this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json';
        this._init();
    }
    _init() {
        this.items = initCatalog();
        this._render();
        this._handleActions();
    }
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'add') {
               /* let item = {
                    name: evt.target.dataset.name
                    , price: +evt.target.dataset.price
                    , img: evt.target.dataset.img
                    , amount: 1
                    , id: evt.target.dataset.id
                }*/
                this.basket.add(item);
            }
        })
    }
    
    _render() {
        let str = "";
        this.items.forEach(item => {
            str += new CatalogItem(item).render();
        })
        this.container.innerHTML = str;
    }
}