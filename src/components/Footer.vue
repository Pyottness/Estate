<script>
import HomeIcon from '../components/material-design-icons/Home.vue';
import NewBoxIcon from '../components/material-design-icons/NewBox.vue';
import SaleIcon from '../components/material-design-icons/Sale.vue';
import CartIcon from '../components/material-design-icons/Cart.vue';

export default {
	name: 'Footer',
  components: {
    HomeIcon,
    NewBoxIcon,
    SaleIcon,
		CartIcon
  }
}
</script>

<template>
  <footer>
    <router-link to="/" exact-active-class="exact-active"><HomeIcon class="icon-4x" /></router-link>
    <router-link to="/new" exact-active-class="exact-active"><NewBoxIcon class="icon-4x" /></router-link>
    <router-link to="/sale" exact-active-class="exact-active"><SaleIcon class="icon-4x" /></router-link>
		<router-link to="/cart" exact-active-class="exact-active"><CartIcon class="icon-4x" /></router-link>
  </footer>


</template>

<style>
footer {
	display: inline-block;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
}
.material-design-icon.icon-4x {
  height: 4em;
  width: 4em;
}
.material-design-icon.icon-4x > .material-design-icon__svg {
  height: 4em;
  width: calc(100% / 4);
	color: white;
}
.exact-active > .material-design-icon.icon-4x > .material-design-icon__svg {
	color: yellow;
}

</style>
