<script>
export default {
	name: 'NavTop'
}
</script>

<template>
<nav>
		<img alt="Homes in Spain logo" src="../assets/logo.png" class="logo">
		<h1 alt="Title">Homes in Spain</h1>
    <input type="checkbox" id="toggle"/>
    <label for="toggle">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    </label>
    <div class="menu">
			<router-link to="/" exact-active-class="exact-active">Home</router-link>
			<router-link to="/new" exact-active-class="exact-active">New</router-link>
			<router-link to="/sale" exact-active-class="exact-active">Sale</router-link>
			<router-link to="/cart" exact-active-class="exact-active">Cart</router-link>
			<router-link to="/map" exact-active-class="exact-active">Map</router-link>
			<router-link to="/about" exact-active-class="exact-active">About</router-link>
			<router-link to="/contact" exact-active-class="exact-active">Contact</router-link>
			<router-link to="/privacy" exact-active-class="exact-active">Privacy</router-link>
    </div>
</nav>

</template>

<style scoped>
	h1 {
		float: left;
		color: White;
		font-size: 40px;
		font-family: fangsong;
		line-height: 10px;
		padding-left: 10px;
	}
	.logo{
		float: left;
		width: 90px;
		height: 70px;
		padding-left: 10px;
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
  }
  .menu {
		margin: 0 30px 0 0;
		background: white;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
  }
  .menu a {
		clear: right;
		text-decoration: none;
		color: gray;
		margin: 0 10px;
		line-height: 9vh;
  }

  span {
		color: #54D17A;
  }
  label {
		display: none;
		position: fixed;
		z-index: 10000;
		top: 25px;
		right: 25px;
		bottom: 0px;
  }
  #toggle {
		display: none;
  }
  .bar {
		display: block;
		width: 25px;
		height: 3px;
		margin: 5px auto;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		background-color: white;
  }
  label {
		display: block;
		cursor: pointer;
  }
  #toggle:checked + label .bar:nth-child(2) {
		opacity: 0;
  }

  #toggle:checked + label .bar:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
  }

  #toggle:checked + label .bar:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
  }
  .menu {
		position: fixed;
		top: 70px;
		text-align: center;
		width: 100%;
		display: none;
  }
  .menu a {
		display: block;
		border-bottom: 1px solid #EAEAEB;
		margin: 0;
  }
	.menu a.exact-active {
		color: blue;
  }
  #toggle:checked + label + .menu  {
		display: block;
  }

	@media only screen and (max-width: 350px) {
		h1 {
			float: left;
			line-height: 70px;
			color: White;
			font-size: 1.1em;
			font-family: fangsong;
			padding-left: 5px;
		}
		.logo{
			float: left;
			width: 90px;
			height: 70px;
			padding-left: 5px;
		}
		label {
			position: fixed;
			z-index: 10000;
			top: 25px;
			right: 15px;
			bottom: 0px;
		}
	}
	@media only screen and (min-device-width: 351px) and (max-device-width: 600px) {
		h1 {
			float: left;
			line-height: 50px;
			color: White;
			font-size: 1.8em;
			font-family: fangsong;
			padding-left: 5px;
		}
		.logo{
			float: left;
			width: 90px;
			height: 70px;
			padding-left: 5px;
		}
		label {
			position: fixed;
			z-index: 10000;
			top: 25px;
			right: 15px;
			bottom: 0px;
		}
	}
</style>
