
export default () => {
    const app = new Vue({
        el: '#app',
        data: {
            items: [],
            cartItems: [],
            url: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON/catalog.json',
            cartUrl: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON/cart.json',
            seen: false
        },
        methods: {
            get(url) {
                return fetch(url).then(d => d.json()) 
            },
            buy(item) {
                console.log(item);
            },
            totalPrice() {
                let sum = 0;
                for(let item of this.cartItems) {
                    sum += item.productPrice * item.amount;
                }
                return sum;
            },
            totalQty() {
                let qty = 0;
                for(let item of this.cartItems) {
                    qty += item.amount;
                }
                return qty;
            }
        },
    
        mounted() {
            this.get(this.url)
            .then(data => {
                this.items = data;
            });
            this.get(this.cartUrl)
            .then(data => {
                this.cartItems = data.content;
            })
        },
    
        // beforeCreate() {
    
        // },
    
        // beforeMount() {
    
        // }
    });
} 