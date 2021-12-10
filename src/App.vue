<script>
import NavTop from './components/NavTop.vue'
import Footer from './components/Footer.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    NavTop,
    Footer,
  },
  computed: {
		...mapState({
      shoppingCart: 'shoppingCart',
      listings: 'listings'
    }),
},
}
</script>
    <template>

    <NavTop />
    <router-view />
    <Footer />

    </template>

  <style>

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    position: relative;
    top: 70px;
    padding-left: 10px;
    padding-bottom: 100px;
    color: #606c76;
    font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 1.6em;
    font-weight: 300;
    letter-spacing: .01em;
    line-height: 1.6;
  }
  @media screen and (max-width: 600px) {
    body {
      position: relative;
      top: 70px;
      padding-left: 2px;
      padding-bottom: 100px;
      color: #606c76;
      font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
      font-size: 1.6em;
      font-weight: 300;
      letter-spacing: .01em;
      line-height: 1.6;
    }
  }

  </style>
