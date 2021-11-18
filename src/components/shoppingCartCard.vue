<script>

import BaseButton from './BaseButton.vue'

export default {
	name: 'shoppingCartCard',
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
			}
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
    generatedPrice() {
      if (this.onSale) {
        return (this.price * 0.9).toFixed(2)
      } else {
        return this.price
      }
    }
},
methods: {
   purchase() {
     alert('This is not a real website!! It is just for show!!!')
  }
  },
}
</script>

<template>
			<div class="shoppingcart">
	<img class="shoppingcartcard-image" :src="image.source" :alt="image.alt" />
	<div>
		<h3>{{ name }}</h3>
		<p>Price: {{ generatedPrice }} <span v-if="onSale">(10% off!)</span></p>
		<p v-if="inStock">In Stock</p>
		<p v-else>Out of Stock</p>
		<div>
			<label>Quantity: {{ quantity }}</label>
      <div>
			<BaseButton @click="purchase()">
				Purchase
			</BaseButton>
    </div>
		</div>
	</div>
</div>
</template>

<style>

.shoppingcart {
	display: flex;
	width: 500px;
	justify-content: space-between;
	margin: 10px;
	background-color: #D3D3D3;
	border-radius: 25px;
}
.shoppingcartcard-image {
	display: flex;
	width: 500px;
	justify-content: space-between;
	margin-bottom: 30px;
	max-width: 300px;
	border-radius: 25px;
	padding: 5px;
}
</style>
