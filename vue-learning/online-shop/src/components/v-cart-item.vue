<template lang="">
    <div class="v-cart-item">
        <img :src="require('../assets/images/' + cart_item_data.image)" alt="img">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>Price: {{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">
            <p>Quantity:</p>
            {{cart_item_data.quantity}}
        </div>
        <button 
            class="v-cart-item__btn"
            @click="deleteFromCart">
            Delete
        </button>
    </div>
</template>
<script>
export default {
    name: 'v-cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    },
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1)
    }

}
</script>
<style lang="scss">
    .v-cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
        img {
            max-width: 80px;
        }
        &__btn {
            @extend %btn;
        }
    }
</style>