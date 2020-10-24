import CatalogItem from './catalogitem.js';
import Parent from './parent_class.js'

export default class Catalog extends Parent{
    constructor(basket, container = '#catalog', url = 'catalog.json') {
        super(container, url);
        this.basket = basket;
    }
    _init() {
        this._get(this.url)
        .then(items => {
            this.items = items;
        })
        .then(() => {
            this._render();
            this._handleEvents();
        })
    }
    _handleEvents() {
        this.container.addEventListener('click', e => {
            if (e.target.name == 'add') {
                this.basket.add({
                    productId: e.target.dataset.id,
                    productImg: e.target.dataset.img,
                    productName: e.target.dataset.name,
                    productPrice: +e.target.dataset.price,
                })
            }
        })
    }
    _render() {
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += new CatalogItem(item).render();
        });
        this.container.innerHTML = htmlStr;
    }

}


