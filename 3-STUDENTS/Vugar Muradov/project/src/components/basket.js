import BasketItem from './basketItem.js'

export default class Basket {
    constructor(container = '#basket') {
        this.items = [];
        this.container = document.querySelector(container);
        //this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json';
        this._init();
     }
    
    _init() {
            this._render();
            this._handleActions();
        }
     _handleActions() {
            this.container.addEventListener('click', evt => {
                if (evt.target.name == 'remove') {
                    this.remove(evt.target.dataset.id);
                }
            })
        }
     _render() {
            let str = "";
            this.items.forEach(item => {
                str += new BasketItem(item).render();
            })
            this.container.innerHTML = str;
        }
        add(item) {
            let find = this.items.find(el => el.id == item.id);
            if (!find) {
                this.items.push(item);
            }
            else {
                find.amount++;
            }
            this._render();
        }
        remove(itemId) {
            let find = this.items.find(el => el.id == itemId);
            if (find.amount > 1) {
                find.amount--;
            }
            else {
                this.items.splice(this.items.indexOf(find), 1);
            }
            this._render();
        }
}