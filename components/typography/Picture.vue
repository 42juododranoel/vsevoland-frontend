<template>
  <img :src="imageUrl" />
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'

export default {
  name: 'Picture',
  props: {
    asset: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      const urlBuilder = imageUrlBuilder(this.$sanity.config)
      return urlBuilder.image(this.asset).auto('format').url()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';
</style>
