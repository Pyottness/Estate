<template>
  <span :aria-hidden="decorative.default"
        :aria-label="title.default"
        class="material-design-icon home-icon"
        role="img"
        v-on="listeners">
    <svg :fill="fillColor.default"
         class="material-design-icon__svg"
         :width="size.default"
         :height="size.default"
         viewBox="0 0 24 24">
      <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HomeIcon",
  data () {
    return {
      title: {
        type: String,
        default: "Home icon"
      },
      decorative: {
        type: Boolean,
        default: false
      },
      fillColor: {
        type: String,
        default: "currentColor"
      },
      size: {
        type: Number,
        default: 24
      }
    }
  }
}
</script>
