<template>

  <div class="new">
    <h1>New!</h1>
    <p>Find all the new houses that have just become available on the market.</p>
  </div>

  <section class="new-card">
    <div class="card-container">
    <Card
      v-for="item in listings.filter(i => i.onSale === false)"
      :name="item.name"
      :image="item.image"
      :price="item.price"
      :quantity="item.quantity"
      :siteUrl="item.siteUrl"
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
  }),
},
}
</script>

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, max-content));
}
</style>
