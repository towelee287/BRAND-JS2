import LIST from './LIST.js'
import CartTotalPrice from './cartTotalPrice.js'

export default class Cart extends LIST {
    constructor(cart = null, container = '#checked-items', url = '/cart.json') {
        super(cart, container, url)
        this.wrapper = document.querySelector('.cart-dropdown');
        this.totalContainer = document.querySelector('#sum');
        this.qtyContainer = document.querySelector('#qty');
    }

    _handleEvents() {
        document.querySelector('#toggle-cart').addEventListener('click', () => {
            this.wrapper.classList.toggle('hidden')
        })

        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'remove') {
                this._remove(evt.target.dataset.id)
            }
        })
    }

    _add(item) {
        let find = this.items.find(cartItem => cartItem.productId == item.productId);

        if (!find) { 
            this.items.push(Object.assign({}, item, { amount: 1 }));
        } else { 
            find.amount++;
        }
        this._render();
        this._renderTotal();
    }

    _remove(id) {
        let find = this.items.find(cartItem => cartItem.productId == id);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1)
        }
        this._render();
        this._renderTotal();
    }

    _renderTotal() {
        let htmlStr = '';
        htmlStr += new CartTotalPrice(this.items).render();
        this.totalContainer.innerHTML = htmlStr;
        this.qtyContainer.innerHTML = this._totalQty();
    }

    _totalQty() {
        let qty = 0;
        for(let item of this.items) {
            qty += item.amount;
        }
        return qty;
    }
}
