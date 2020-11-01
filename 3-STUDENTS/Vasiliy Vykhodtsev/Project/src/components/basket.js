import BasketItem from './basketitem.js'
export default class Basket {
    constructor (container = '#basket', url = '/basket.json') {
        this.items = [];
        this.wrapper = null;
        this.container = document.querySelector(container);
        this.total = null;
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this._init();
    }
    _init() {
        this.wrapper = document.querySelector('.drop-cart');
        this.total = document.querySelector('#basket-total');

        this._get(this.url)
            .then(basketObject => {
                this.items = basketObject.content
            })
            .then(() => {
                this._render();
                this._handleEvents();
                this._total();
            })
    }
    _get(url) {
        return fetch(url).then(d => d.json())
    }
    _handleEvents() {
        document.querySelector('#toggle-basket').addEventListener('click', () => {
            this.wrapper.classList.toggle('hidden');
        });

        this.container.addEventListener('click', e => {
            if (e.target.name == 'remove') {
                this.remove(e.target.dataset.id)
            }
        }) 

    }
    add(item) {
        let find = this.items.find(basketItem => basketItem.productId == item.productId);

        if (!find) {
            this.items.push(Object.assign({}, item, { amount: 1 }));
        } else {
            find.amount++;
        }
        this._render();
        this._total();
    }
    remove(id) {
        let find = this.items.find(basketItem => basketItem.productId == id);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1)
        }
        this._render();
        this._total();
    }
    _total() {
        let sum;
        let totalStr = '';
        if (this.items.length > 0) {
        let arr = [];
		this.items.forEach((item) => {
			arr.push((item.productPrice)*(item.amount));
        })
         sum = arr.reduce((sum, current) => {
            return sum + current;
        })
        } else sum = 0;
        
        totalStr = `$${sum}`



        this.total.innerHTML = totalStr;
        
    }
    _render() {
        
        let htmlStr = '';
				this.items.forEach((item) => {
					htmlStr += new BasketItem(item).render();
                });
				this.container.innerHTML = htmlStr;
            }
}