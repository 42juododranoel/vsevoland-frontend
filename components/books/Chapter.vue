<template>
  <div class="chapter" :style="{ backgroundImage: `url(${imageUrl})` }">
    <div class="chapter__title">
      <div class="chapter__title__prefix">
        {{ titlePrefix }}
      </div>
      <div class="chapter__title__content">
        {{ title }}
      </div>
    </div>
    <div class="chapter__subtitle-wrapper">
      <div class="chapter__subtitle">
        <div class="chapter__subtitle__prefix">или,</div>
        <div class="chapter__subtitle__content">
          <span class="chapter__subtitle__content__hanging-laquo">«</span>{{ subtitle
          }}<span>»</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'

export default {
  name: 'Chapter',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
  },
  computed: {
    titlePrefix() {
      return `Глава ${this.number}.`
    },
    imageUrl() {
      const urlBuilder = imageUrlBuilder(this.$sanity.config)
      return urlBuilder.image(this.image.asset).auto('format').url()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.chapter {
  grid-row: 1;
  grid-column: 1;
  font-family: $font-family-caption;
  position: relative;
  margin-left: $page-outer-padding-sm;
  margin-right: $page-outer-padding-sm;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: contain;

  &__title {
    &__prefix {
      font-weight: normal;
      font-size: 36px;
      margin-bottom: 27px;
    }
    &__content {
      text-transform: uppercase;
      font-size: 81px;
      font-weight: bold;
      margin-left: -8px;
    }
  }

  &__subtitle-wrapper {
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &__subtitle {
    font-style: italic;
    font-family: 'PT Serif';
    text-align: left;
    margin-left: 30px;

    &__prefix {
      font-size: 27px;
      margin-bottom: 5px;
    }

    &__content {
      font-size: 54px;
      line-height: 45px;

      &__hanging-laquo {
        margin-left: -27px;
      }
    }
  }
}

@media (min-width: $width-md) {
  .chapter {
    margin-left: $page-outer-padding-md;
    margin-right: $page-outer-padding-md;
  }
}
</style>
