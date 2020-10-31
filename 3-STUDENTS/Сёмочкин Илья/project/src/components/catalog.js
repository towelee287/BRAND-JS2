import LIST from './LIST.js'


export default class Catalog extends LIST {
    constructor(cart, container = '#items-catalog', url = '/catalog.json') {
        super(cart, container, url)
    }

    _handleEvents() {
        this.container.addEventListener('click', evt => { 
            if (evt.target.name == 'add') {
                this.cart._add({
                    productId: evt.target.dataset.id,
                    productName: evt.target.dataset.name,
                    productImg: evt.target.dataset.img,
                    productPrice: +evt.target.dataset.price
                }); 
            }
        })
    }  
}
       