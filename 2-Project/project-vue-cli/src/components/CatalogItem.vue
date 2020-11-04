<template>
    <div 
        class="hot-offer" 
    >
        <div class="hot-offer__shadow">
            <img :src="item.productImg" alt="t-shirt">
            <div class="hot-offer__hover">
                <div class="hot-offer__square">
                    <button 
                        name="add"
                        @click="add(item)"
                    ><img src="@/assets/img/kart_white.png" alt="order">Add to Cart</button>
                </div>
            </div>
        </div>
        <a>{{ item.productName }}</a>
        <h3>
            ${{ item.productPrice }}
        </h3>
    </div>
</template>

<script>
export default {
    props: [ 'item' ]
}
</script>

<style>

</style>