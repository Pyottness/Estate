
<template>
  <section class="cart">
      <h2> Shopping Cart: </h2>
      <shoppingCartCard
        v-for="item in shoppingCart"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :quantity="item.quantity"
        :siteUrl="item.siteUrl"
        :inStock="item.inStock"
        :onSale="item.onSale"
        :key="item.id">
        <template v-slot:link>
          <router-link :to="`${ item.siteUrl }`"><img class="shoppingcartcard-image" :src="item.image.source" :alt="item.image.alt" /></router-link>
        </template>
        <template v-slot:remove>
          <BaseButton @click="removeShoppingCart(item)">
            Remove
          </BaseButton>
        </template>
      </shoppingCartCard>
    </section>
</template>

<script>
import shoppingCartCard from '../components/shoppingCartCard.vue'
import { mapState, mapActions } from 'vuex'
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'Cart',
  components: {
    shoppingCartCard,
    BaseButton
  },
  computed: {
    ...mapState({
      shoppingCart: 'shoppingCart',
      listings: 'listings'
    }),
  },
  methods: {
    ...mapActions(['updateShoppingCart']),
    ...mapActions(['removeShoppingCart']),
  }
}
</script>

<style>

</style>
