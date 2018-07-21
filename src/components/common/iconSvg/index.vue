<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="svgIcon"></use>
  </svg>
</template>

<script>
  export default {
    name: 'svg-icon',
    props: {
      iconName: {
        type: String,
        required: true
      }
    },
    computed: {
      svgIcon() {
        return `#icon-${this.iconName}`
      }
    }
  }
</script>
