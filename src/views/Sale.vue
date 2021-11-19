<template>
  <div class="sale">
    <h1>Sale!</h1>
    <p>Below you may find all the houses that have had a price reduction! We promise they are still amazing!</p>
  </div>

  <section class="sale-card">
    <div class="card-container">
    <Card
      v-for="item in listings.filter(i => i.onSale === true)"
      :name="item.name"
      :image="item.image"
      :price="item.price"
      :quantity="item.quantity"
      :inStock="item.inStock"
      :onSale="item.onSale"
      :key="item.id"
    />
  </div>
  </section>

</template>

<script>
import Card from '../components/Card.vue'
import { mapGetters, mapState } from 'vuex'
export default {
name: 'Home',
components: {
  Card
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
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, max-content));
}
</style>
