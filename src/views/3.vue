<script>
import Estate from '../components/Estate.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Estate
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

<template>
    <Estate
      v-for="item in listings.filter(i => i.id === 3)"
      :name="item.name"
      :image="item.image"
      :description="item.description"
      :rooms="item.rooms"
      :location="item.location"
      :price="item.price"
      :quantity="item.quantity"
      :siteUrl="item.siteUrl"
      :inStock="item.inStock"
      :onSale="item.onSale"
      :key="item.id"
    />
</template>
