import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      shoppingCart: [],
      listings: [
                  {
                    name: 'White House',
                    image: {
                      source: require('../assets/House.jpg'),
                      alt: 'White House'
                    },
                    price: 400000,
                    description: 'Spend your days bathing in the sun or swimming in your fantastic pool.',
                    location: 'Marbella',
                    rooms: '3 bedrooms, 1 kitchen , 1 lounge and 2 restrooms.',
                    id: 1,
                    siteUrl: '/house/1',
                    inStock: true,
                    quantity: 1,
                    onSale: false,
                  },
                  {
                    name: 'Orange Brick House',
                    image: {
                      source: require('../assets/House2.jpg'),
                      alt: 'Orange Brick House'
                    },
                    price: 500000,
                    description: 'Settle down in northern Spain where it feels like home but better.',
                    location: 'Galicia',
                    rooms: '4 bedrooms, 1 kitchen , 2 lounges and 2 restrooms.',
                    id: 2,
                    siteUrl: '/house/2',
                    inStock: true,
                    quantity: 1,
                    onSale: false,
                  },
                  {
                    name: 'White Modern House',
                    image: {
                      source: require('../assets/House3.jpg'),
                      alt: 'White Modern House'
                    },
                    price: 300000,
                    description: 'Settle down in a lovely beach front property that will bring comfort in every way.',
                    location: 'Benalmádena',
                    rooms: '3 bedrooms, 1 kitchen , 1 lounge and 2 restrooms.',
                    id: 3,
                    siteUrl: '/house/3',
                    inStock: true,
                    quantity: 1,
                    onSale: false,
                  },
                  {
                    name: 'White Villa',
                    image: {
                      source: require('../assets/House4.jpg'),
                      alt: 'White Villa'
                    },
                    price: 400000,
                    description: 'Settle down in a lovely countryside property that will make your dreams come true.',
                    location: 'Coín',
                    rooms: '4 bedrooms, 1 kitchen , 1 lounge and 2 restrooms.',
                    id: 4,
                    siteUrl: '/house/4',
                    inStock: true,
                    quantity: 1,
                    onSale: true,
                  },
                  {
                    name: 'Luxury Modern Home',
                    image: {
                      source: require('../assets/House5.jpg'),
                      alt: 'Luxury Modern Home'
                    },
                    price: 300000,
                    description: 'Settle down in a lovely beach front property that will charm you away.',
                    location: 'Benalmádena',
                    rooms: '3 bedrooms, 1 kitchen , 1 lounge and 2 restrooms.',
                    id: 5,
                    siteUrl: '/house/5',
                    inStock: true,
                    quantity: 1,
                    onSale: true,
                  },
                  {
                    name: 'Modern Brick House',
                    image: {
                      source: require('../assets/House6.jpg'),
                      alt: 'Modern Brick House'
                    },
                    price: 250000,
                    description: 'At this price, this one will not be on the market for long! Call us now to check it out!',
                    location: 'Torremolinos',
                    rooms: '3 bedrooms, 1 kitchen , 1 lounge and 2 restrooms.',
                    id: 6,
                    siteUrl: '/house/6',
                    inStock: true,
                    quantity: 1,
                    onSale: true,
                  },
      ]
    }
  },
  getters: {
  },
  mutations: {
    ADD_ITEMS_TO_SHOPPING_CART: (state, payload) => {
      state.shoppingCart.push(payload);
    },
    REMOVE_ITEMS_FROM_SHOPPING_CART(state, payload) {
      state.shoppingCart.splice(state.shoppingCart.indexOf(payload), 1);
    },
  },
  actions: {
    updateShoppingCart({ commit }, payload) {
      commit('ADD_ITEMS_TO_SHOPPING_CART', payload)
    },
    removeShoppingCart({ commit }, payload) {
      commit('REMOVE_ITEMS_FROM_SHOPPING_CART', payload)
    },
  },
  modules: {
  }
})
