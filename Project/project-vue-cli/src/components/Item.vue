<template>
  <div>
    <template v-if="type =='catalog'">
          <div class="featured__item">
                <img :src="item.productImg" alt="">
                <div class="item__hover">
                <button 
                name="add" 
                class="cart"
                @click="add(item)" 
                ><img src="@/assets/img/Forma_1_copy.svg" alt="">Add to Cart</button>
                </div>
            <div class="item__bot">{{ item.productName }}<br><span>${{ item.productPrice }}</span></div>
            </div>
    </template>
          <template v-if="type =='basket'">
                <form 
                 class="drop-cart__product" 
                name="drop-cart-form"
                >
                    <a href="product.html" class="drop-cart__product-link">
                    <img :src="item.productImg" alt="product" class="drop-cart__product-img">
                    </a>
                        <div class="drop-cart__product-info">
                            <a href="product.html" class="drop-cart__product-name">{{ item.productName }}</a>
                            <div class="drop-cart__product-price">
                                <span class="drop-cart__product-count">{{ item.amount }} </span> x {{item.productPrice }}
                                <span class="drop-cart__product-sum"> = ${{ item.productPrice * item.amount }}</span>
                            </div>
                        </div>
                <!-- a 
                href="#" 
                name="remove" 
                class="drop-cart__product-close far fa-times-circle"
                @click.prevent="$parent.remove(item.productId)"
                ></a -->
                <a 
                href="#" 
                name="remove" 
                class="drop-cart__product-close far fa-times-circle"
                @click.prevent="$emit('del', item.productId)" 
                ></a>
            </form>
              <!--$root.$emit 
              $parent.$emit-->
          </template>
  </div>
</template>

<script>
export default {
    props: {
        type: {
            default: 'catalog'
        },
        item: { type: Object, default: () => ({}) }
    },
    methods: {
        add(item) {
            //this.$parent.$parent.$refs.bask.add(item);
            this.$store.dispatch('changeBasketItems', {item, action: undefined });
        }
    }
}
</script>

<style>

</style>