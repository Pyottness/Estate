
<template>
  <section class="cart">
      <h2> Shopping Cart:  </h2>
      <shoppingCartCard
        v-for="item in shoppingCart"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :quantity="item.quantity"
        :inStock="item.inStock"
        :onSale="item.onSale"
        :key="item.name"
        />
    </section>
</template>

<script>
import shoppingCartCard from '../components/shoppingCartCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Cart',
  components: {
    shoppingCartCard
  },
  computed: {
    ...mapState({
      shoppingCart: 'shoppingCart',
      listings: 'listings'
    }),
  },
  methods: {
    ...mapActions(['updateShoppingCart']),
  }
}
</script>

<style>

</style>
