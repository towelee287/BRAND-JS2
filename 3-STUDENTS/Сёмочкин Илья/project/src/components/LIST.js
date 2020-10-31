import ITEM from './ITEM.js'

export default class List {
    constructor(cart, container, url) {
        this.items = [];
        this.cart = cart;
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON' + url;
        this._init();
    }

    _init() {
        this._get(this.url)
        .then(data => {
            this.items = this.cart ? data : data.content;
        })
        .then (() => {
            this._render();
            this._handleEvents();
            if (this.constructor.name === 'Cart') {
                this._renderTotal();
            }
        })
    }

    _get(url) {
        return fetch(url).then(d => d.json()) 
    }
    
    _render() {
        let htmlStr = '';
        let type = this.constructor.name.toLowerCase();
        this.items.forEach(item => {
            htmlStr += new ITEM(item, type).render();
        })
        this.container.innerHTML = htmlStr;
    }
}