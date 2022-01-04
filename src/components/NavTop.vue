<script>

export default {
	name: 'NavTop',
	data() {
		return {
			toggle: false,
		}
	},
	methods: {
		closeMenu() {
			this.toggle = !this.toggle
		},
	},
}
</script>

<template>
<nav>
		<router-link to="/" exact-active-class="exact-active"><img alt="Homes in Spain logo" src="../assets/logo.png" class="logo"></router-link>
		<router-link to="/" exact-active-class="exact-active"><h1 class="title" alt="Title">Homes in Spain</h1></router-link>
    <input v-model="toggle" switch="false" type="checkbox" id="toggle"/>
    <label class="hamburger" for="toggle">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    </label>
    <div class="nav-top">
			<router-link to="/" exact-active-class="exact-active" @click="closeMenu()">Home</router-link>
			<router-link to="/new" exact-active-class="exact-active" @click="closeMenu()">New</router-link>
			<router-link to="/sale" exact-active-class="exact-active" @click="closeMenu()">Sale</router-link>
			<router-link to="/cart" exact-active-class="exact-active" @click="closeMenu()">Cart</router-link>
			<router-link to="/map" exact-active-class="exact-active" @click="closeMenu()">Map</router-link>
			<router-link to="/about" exact-active-class="exact-active" @click="closeMenu()">About</router-link>
			<router-link to="/contact" exact-active-class="exact-active" @click="closeMenu()">Contact</router-link>
			<router-link to="/privacy" exact-active-class="exact-active" @click="closeMenu()">Privacy</router-link>
    </div>
</nav>

</template>

<style>
	.title {
		float: left;
		color: White;
		font-size: 40px;
		font-family: fangsong;
		line-height: 10px;
		padding-left: 10px;
		-webkit-tap-highlight-color: transparent;
	}
	.logo{
		float: left;
		width: 90px;
		height: 70px;
		padding-left: 10px;
		-webkit-tap-highlight-color: transparent;
	}
  nav {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		background-color: black;
		border-bottom: 1px solid #EAEAEB;
		text-align: right;
		height: 70px;
		line-height: 70px;
		-webkit-tap-highlight-color: transparent;
  }
  .nav-top {
		margin: 0 30px 0 0;
		background: white;
		height: 100vh;
		position: fixed;
		top: 70px;
		text-align: center;
		width: 100%;
		display: none;
		z-index: 10000;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		-webkit-tap-highlight-color: transparent;
  }
  .nav-top a {
		clear: right;
		text-decoration: none;
		color: gray;
		margin: 0 10px;
		line-height: 9vh;
		display: block;
		z-index: 10000;
		border-bottom: 1px solid #EAEAEB;
		-webkit-tap-highlight-color: transparent;
  }
  .hamburger {
		position: fixed;
		z-index: 10000;
		display: block;
		cursor: pointer;
		top: 25px;
		right: 25px;
		bottom: 0px;
		-webkit-tap-highlight-color: transparent;
  }
  #toggle {
		display: none;
  }
  .bar {
		display: block;
		color: #54D17A;
		width: 25px;
		height: 3px;
		margin: 5px auto;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		background-color: white;
		-webkit-tap-highlight-color: transparent;
  }
  #toggle:checked + .hamburger .bar:nth-child(2) {
		opacity: 0;
  }

  #toggle:checked + .hamburger .bar:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
  }

  #toggle:checked + .hamburger .bar:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
  }
	.nav-top a.exact-active {
		color: blue;
  }
  #toggle:checked + .hamburger + .nav-top  {
		display: block;
		z-index: 10000;
  }

	@media only screen and (max-width: 350px) {
		.title {
			float: left;
			line-height: 70px;
			color: White;
			font-size: 1.1em;
			font-family: fangsong;
			padding-left: 5px;
			-webkit-tap-highlight-color: transparent;
		}
		.logo{
			float: left;
			width: 90px;
			height: 70px;
			padding-left: 5px;
			-webkit-tap-highlight-color: transparent;
		}
		.hamburger {
			position: fixed;
			z-index: 10000;
			top: 25px;
			right: 15px;
			bottom: 0px;
			-webkit-tap-highlight-color: transparent;
		}
	}
	@media only screen and (min-device-width: 351px) and (max-device-width: 600px) {
		.title {
			float: left;
			line-height: 50px;
			color: White;
			font-size: 1.8em;
			font-family: fangsong;
			padding-left: 5px;
			-webkit-tap-highlight-color: transparent;
		}
		.logo{
			float: left;
			width: 90px;
			height: 70px;
			padding-left: 5px;
			-webkit-tap-highlight-color: transparent;
		}
		.hamburger {
			position: fixed;
			z-index: 10000;
			top: 25px;
			right: 15px;
			bottom: 0px;
			-webkit-tap-highlight-color: transparent;
		}
	}
</style>
