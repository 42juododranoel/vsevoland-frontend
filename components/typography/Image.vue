<template>
  <figure>
    <img :src="imageUrl" />
  </figure>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'

export default {
  name: 'Image',
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

figure {
  display: flex;
  margin-bottom: 36px;
}

@media (min-width: $width-lg) {
  figure {
    margin-bottom: 54px;
  }
}
</style>
