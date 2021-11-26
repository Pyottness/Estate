<script>
import { mapState, mapActions } from 'vuex'
import BaseButton from './BaseButton.vue'

export default {
	name: 'Estate',
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
			siteUrl: {
				type: String,
				required: true
			},
      description: {
				type: String,
				required: true
			},
      rooms: {
				type: String,
				required: true
			},
      location: {
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
			}
	},
	data() {
    return {
			house: {
					name: this.name,
					image: this.image,
					inStock: this.inStock,
					price: this.price,
					quantity: this.quantity,
					onSale: this.onSale,
					siteUrl: this.siteUrl,
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
			<div class="estate">
        <h1>{{ name }}</h1>
	<img class="estate-image" :src="image.source" :alt="image.alt" />
  <p>{{ description }}</p>
  <p>{{ rooms }}</p>
  <p>{{ location }}</p>
	<div>
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

.estate {

}
.estate-image {
  width: 800px;
}
@media only screen and (max-width: 350px) {
	.estate-image {
		width: 260px;
	}
}
@media only screen and (min-device-width: 351px) and (max-device-width: 450px) {
	.estate-image {
		width: 340px;
	}
}
@media only screen and (min-device-width: 750px) and (max-device-width: 800px) {
	.estate-image {
		width: 720px;
	}
}
</style>
