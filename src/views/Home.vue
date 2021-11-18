
<template>

  <div class="home">
    <h1>Where dreams come true</h1>
    <p>
      Have you ever dreamed of living in sunny Spain? Look no further! <br> We have you covered. We have a collection of the most beautiful houses on the market. <br> Don’t take our word for it though! Scroll down and check for yourself!
    </p>
    <section class="listings">
      <h2>Listings</h2>
      <Card
        v-for="item in listings"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :quantity="item.quantity"
        :inStock="item.inStock"
        :onSale="item.onSale"
        :key="item.id"
      />
    </section>

  </div>

</template>

<script>
import Card from '../components/Card.vue'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Card,
  },
  computed: {
    ...mapGetters({
    }),
    ...mapState({
      shoppingCart: 'shoppingCart',
      listings: 'listings'
    })
  }
}
</script>

<style>

.listings {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

</style>
