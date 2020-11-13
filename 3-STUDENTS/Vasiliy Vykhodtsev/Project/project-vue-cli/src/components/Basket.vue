<template>
<div>
    <div id="basket">
        <Item 
        v-for="item of items"
        type="basket"
        :item="item"
        :key="item.productId"
        @del="remove"
        />
        <div class="drop-cart__total">
                <span class="drop-cart__total-name">TOTAL</span>
                <span id="basket-total" class="drop-cart__total-sum">${{ total() }}</span>
        </div>
                <a id="checkout-button" onclick="return false" href="checkout.html" class="drop-cart__button">Checkout</a>
                <a id="go-cart" href="shopping-cart.html" class="drop-cart__button">Go to cart</a>
    </div>
</div>
</template>

<script>
import Item from './Item.vue';
//import { get, post, put, deleteReq } from '@/core/requests';
//import { post } from '@/core/requests';
import { mapGetters } from 'vuex';

export default {
    components: { Item },
    data() {
        return {
                //url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
                url: '/api/basket',
        }
    },
    async mounted() {
    try {
        this.$store.dispatch('loadBasket', this.url);
    }
    catch(err) {
        console.log(err);
    }
  },
  methods: {
      /*add(product) {
        let find = this.items.find(el => el.productId == product.productId);
        if (!find) {
            let newItem = Object.assign({}, product, { amount: 1 });
            post(this.url, newItem)
                .then(res => {
                    if(res.status) {
                        this.$store.dispatch('changeBasketItems', { item: newItem, action: 1 });    
                    }
                });
            
        } else {
            //find.amount++;
            this.$store.dispatch('changeBasketItems', { item: find, action: 3, amount: 1 });
        }
    },*/
    remove(id) {
        let find = this.items.find(el => el.productId == id);
        if (find.amount > 1) {
            this.$store.dispatch('changeBasketItems', { item: find, action: 3, amount: -1 });
            //find.amount--;
        } else {
            //this.items.splice(this.items.indexOf(find), 1)
            this.$store.dispatch('changeBasketItems', { item: find, action: 2 });
        }
    }, 
      total() {
        let sum;
        if (this.items.length > 0) {
        let arr = [];
		this.items.forEach((item) => {
			arr.push((item.productPrice)*(item.amount));
        })
         sum = arr.reduce((sum, current) => {
            return sum + current;
        })
        } else sum = 0;
        return sum;
    }
  },
  computed: {
      ...mapGetters({ items: 'basket_getter' })
  }
}
</script>

<style>

</style>