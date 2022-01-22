<template>
  <div class="volume">
    <div class="volume--header">
      <div />
    </div>

    <div class="volume--body">
      <div class="volume--title">
        {{ title }}
      </div>

      <div class="volume--image">
        <Picture :asset="image.asset" />
      </div>
    </div>

    <div class="volume--footer">
      <div />
    </div>
  </div>
</template>

<script>
import Picture from '~/components/typography/Picture.vue'

export default {
  name: 'Chapter',
  components: { Picture },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.volume {
  display: grid;
  grid-template-rows: $spread-header-size-sm 1fr $spread-footer-size-sm;
  grid-template-columns: 1fr;

  &--body {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;
    padding-left: $spread-outer-padding-sm;
    padding-right: $spread-outer-padding-sm;
    font-family: $font-family-caption;
    text-align: center;
  }

  &--header {
    padding-left: $spread-outer-padding-sm;
    padding-right: $spread-outer-padding-sm;
  }

  &--footer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding-left: $spread-outer-padding-sm;
    padding-right: $spread-outer-padding-sm;
  }

  &--title {
    text-transform: uppercase;
    font-size: 99px;
    line-height: 126px;
    font-weight: bold;
    margin-bottom: 100px;
  }
}

@media (min-width: $width-md) {
  .volume {
    grid-template-rows: $spread-header-size-md 1fr $spread-footer-size-md;

    &--header {
      padding-left: $spread-outer-padding-md;
      padding-right: $spread-outer-padding-md;
    }

    &--body {
      padding-left: $spread-outer-padding-md;
      padding-right: $spread-outer-padding-md;
    }

    &--image img {
      width: 60%;
    }
  }
}
</style>
