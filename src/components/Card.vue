<script>
import { mapState, mapActions } from 'vuex'
import BaseButton from './BaseButton.vue'

export default {
	name: 'Card',
	components: {
		BaseButton
	},
	props: {
			image: {
				type: Object,
				required: true
			},
			inStock: {
				type: Boolean,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			price: {
				type: Number,
				required: true
			},
			quantity: {
				type: Number,
				default: 1
			},
			onSale: {
				type: Boolean,
				required: true
			},
			id: {
				type: Number,
				required: true
			},
			url: {
				type: String,
				required: true
			},
	},
	data() {
    return {
			house: {
					name: this.name,
					image: this.image,
					inStock: this.stock,
					price: this.price,
					quantity: this.quantity,
					onSale: this.onSale,
					id: this.id,
			},
    }
  },
  computed: {
		...mapState({
      shoppingCart: 'shoppingCart',
      listings: 'listings'
    }),
    generatedPrice() {
      if (this.onSale) {
        return (this.price * 0.9).toFixed(2)
      } else {
        return this.price
      }
    }
},
methods: {
    ...mapActions(['updateShoppingCart']),
  },
}
</script>

<template>
	<div class="card">
	<router-link :to="'/' + this.name"><img class="card-image" :src="image.source" :alt="image.alt" /></router-link>
	<div>
		<h3>{{ name }}</h3>
		<p>Price: {{ generatedPrice }} <span v-if="onSale">(10% off!)</span></p>
		<p v-if="inStock">In Stock</p>
		<p v-else>Out of Stock</p>
		<div>
			<label>Quantity: {{ quantity }}</label>
			<p><BaseButton @click="updateShoppingCart(house)">
				Add to shopping cart
			</BaseButton></p>
		</div>
	</div>
</div>
</template>

<style>
.card {
	display: flex;
	width: 400px;
	justify-content: space-between;
	margin: 10px;
	background-color: #D3D3D3;
	border-radius: 25px;
}
.card-image {
	display: flex;
	width: 400px;
	justify-content: space-between;
	margin-bottom: 30px;
	max-width: 250px;
	border-radius: 25px;
	padding: 5px;
}

</style>
