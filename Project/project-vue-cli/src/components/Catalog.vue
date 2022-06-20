<template>
  <div>
      <div class="featured__items container" id="catalog">
      <Item 
        v-for="item of items" 
        :key="item.productId"
        :item="item"
    />
    </div>
  </div>
</template>

<script>
import { get } from '@/core/requests';
import Item from './Item.vue';
//import Basket from './Basket.vue';
export default {
    components: { Item },
    data() {
        return {
            items: [],
            //url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
            url: '/api/catalog',
        }
    },
    async mounted() {
    try {
        this.items = await get(this.url);
    }
    catch(err) {
        console.log(err);
    }
  }
  
}
</script>

<style>

</style>