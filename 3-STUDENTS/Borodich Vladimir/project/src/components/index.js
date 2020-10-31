// import Basket from './products/basket.js';
// import Catalog from './products/catalog.js';
import MainNavigation from './navigation/main.js';
import FooterNavigation from './navigation/footer.js';

export default () => {
    // const catalog = new Catalog('#prod', 'catalog/prod.json');
    // const basket = new Basket('#basket');
    // new MainNavigation();
    // new FooterNavigation();

    const vue = new Vue({
        el: '#app',
        data: {
            catalogItems: [],
            basketItems: [],
            url: 'https://raw.githubusercontent.com/wowankz/static/master/shop/catalog/prod.json',
            baseImgUrl: 'https://raw.githubusercontent.com/wowankz/static/master/shop/img/',
            storage: window.localStorage,
        },
        methods: {
            async getProducts() {
                let res = await fetch(this.url);
                let items = await res.json();
                res.ok ? (this.catalogItems = items.products) : (this.catalogItems = []);
            },

            getStorage() {
                let items = this.storage.getItem('basket');
                items ? (this.basketItems = JSON.parse(items)) : this.setStorage([]);
            },

            setStorage(data) {
                this.storage.setItem('basket', JSON.stringify(data));
            },

            addToCart(item) {
                let product = Object.assign({}, { amount: 1 }, item);
                let searchResult = this.basketItems.find((item) => item.id === product.id);
                searchResult ? searchResult.amount++ : this.basketItems.push(product);
                this.setStorage(this.basketItems);
            },

            removeBasketItem(id) {
                let product = this.basketItems.find((item) => item.id === +id);
                product.amount > 1 ? product.amount-- : this.basketItems.splice(this.basketItems.indexOf(product), 1);
                this.setStorage(this.basketItems);
            },

            renderStars(value) {
                return `
                <i class="${value > '0' ? 'fas' : 'far'} ${value === '0.5' ? 'fa-star-half-alt' : 'fa-star'}"></i>
                <i class="${value > '1' ? 'fas' : 'far'} ${value === '1.5' ? 'fa-star-half-alt' : 'fa-star'}"></i>
                <i class="${value > '2' ? 'fas' : 'far'} ${value === '2.5' ? 'fa-star-half-alt' : 'fa-star'}"></i>
                <i class="${value > '3' ? 'fas' : 'far'} ${value === '3.5' ? 'fa-star-half-alt' : 'fa-star'}"></i>
                <i class="${value > '4' ? 'fas' : 'far'} ${value === '4.5' ? 'fa-star-half-alt' : 'fa-star'}"></i>
            `;
            },
        },

        computed: {
            amountTotal() {
                return this.basketItems.length > 0
                    ? this.basketItems.reduce((sum, item) => {
                          return (sum += item.price * item.amount);
                      }, 0)
                    : '0';
            },
        },

        mounted() {
            this.getProducts();
            this.getStorage();
            new MainNavigation();
            new FooterNavigation();
        },
    });
};
