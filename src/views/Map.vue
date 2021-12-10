<template>
  <div class="map">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[40.4637, -3.7492]"
    >
      <l-tile-layer
        :url="url" :subdomains="subdomains"
      ></l-tile-layer>

      <l-marker :lat-lng="[36.5101, -4.8824]">
        <l-icon v-for="item in listings.filter(i => i.id === 1)" :icon-url="item.image.source" :icon-size="iconSize" :key="item.id" />
        <l-popup>
          <Card
            v-for="item in listings.filter(i => i.id === 1)"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :quantity="item.quantity"
            :siteUrl="item.siteUrl"
            :inStock="item.inStock"
            :onSale="item.onSale"
            :key="item.id"
          />

        </l-popup>
      </l-marker>

      <l-marker :lat-lng="[42.5751, -8.1339]">
        <l-icon v-for="item in listings.filter(i => i.id === 2)" :icon-url="item.image.source" :icon-size="iconSize" :key="item.id" />
        <l-popup>
          <Card
            v-for="item in listings.filter(i => i.id === 2)"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :quantity="item.quantity"
            :siteUrl="item.siteUrl"
            :inStock="item.inStock"
            :onSale="item.onSale"
            :key="item.id"
          />

        </l-popup>
      </l-marker>

      <l-marker :lat-lng="[36.5988, -4.5168]">
        <l-icon v-for="item in listings.filter(i => i.id === 3)" :icon-url="item.image.source" :icon-size="iconSize" :key="item.id" />
        <l-popup>
          <Card
            v-for="item in listings.filter(i => i.id === 3)"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :quantity="item.quantity"
            :siteUrl="item.siteUrl"
            :inStock="item.inStock"
            :onSale="item.onSale"
            :key="item.id"
          />

        </l-popup>
      </l-marker>

      <l-marker :lat-lng="[36.6616, -4.7575]">
        <l-icon v-for="item in listings.filter(i => i.id === 4)" :icon-url="item.image.source" :icon-size="iconSize" :key="item.id" />
        <l-popup>
          <Card
            v-for="item in listings.filter(i => i.id === 4)"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :quantity="item.quantity"
            :siteUrl="item.siteUrl"
            :inStock="item.inStock"
            :onSale="item.onSale"
            :key="item.id"
          />

        </l-popup>
      </l-marker>

      <l-marker :lat-lng="[36.0143, -5.6044]">
        <l-icon v-for="item in listings.filter(i => i.id === 5)" :icon-url="item.image.source" :icon-size="iconSize" :key="item.id" />
        <l-popup>
          <Card
            v-for="item in listings.filter(i => i.id === 5)"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :quantity="item.quantity"
            :siteUrl="item.siteUrl"
            :inStock="item.inStock"
            :onSale="item.onSale"
            :key="item.id"
          />

        </l-popup>
      </l-marker>

      <l-marker :lat-lng="[36.6226, -4.4995]">
        <l-icon v-for="item in listings.filter(i => i.id === 6)" :icon-url="item.image.source" :icon-size="iconSize" :key="item.id" />
        <l-popup>
          <Card
            v-for="item in listings.filter(i => i.id === 6)"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :quantity="item.quantity"
            :siteUrl="item.siteUrl"
            :inStock="item.inStock"
            :onSale="item.onSale"
            :key="item.id"
          />

        </l-popup>
      </l-marker>

    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LPopup,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { mapState } from 'vuex'
import Card from '../components/Card.vue'
export default {
  components: {
    Card,
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 6,
      iconWidth: 40,
      iconHeight: 40,
      url: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      subdomains: ['mt0','mt1','mt2','mt3'],
    };
  },
  computed: {
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
    ...mapState({
      listings: 'listings',
    })
  },
  methods: {
	},
};
</script>

<style>

.map {
  height: 75vh;
  width: 100%;
  display: fixed;
  z-index: 0;
}
.leaflet-popup-content-wrapper {
    width: 450px;
}

@media only screen and (max-width: 350px) {
  .map {
    height: 70vh;
    width: 100%;
  }
  .leaflet-popup-content-wrapper {
      width: 280px;
  }
}
@media only screen and (min-device-width: 351px) and (max-device-width: 450px) {
  .map {
    height: 70vh;
    width: 100%;
  }
  .leaflet-popup-content-wrapper {
      width: 370px;
  }
}
</style>
