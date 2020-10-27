import Item from './item';
class ProductList {
    constructor(container, url = '') {
        this._items = null;
        this._baseUrl = 'https://raw.githubusercontent.com/wowankz/static/master/shop/';
        this._url = this._baseUrl + url;
        this._container = null;
        this._containerName = container;
        this._init();
        console.log(`Container ${this._containerName}  init`);
    }

    _init() {
        this._container = document.querySelector(this._containerName);
    }

    _render() {
        let content = '';
        if (this._items.length > 0) {
            this._items.forEach((item) => {
                content += new Item(item, this._containerName).render();
            });
        } else {
            content = new Item(null, this._containerName).render();
        }
        this._container.innerHTML = content;
    }
}

export default ProductList;
