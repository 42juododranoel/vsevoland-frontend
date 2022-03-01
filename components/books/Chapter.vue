<template>
  <div class="chapter" :class="{ chapter_centered: isCentered }">
    <div class="chapter-header-left" />
    <div class="chapter-body-left" />
    <div class="chapter-footer-left" />

    <div class="chapter-header-content" />

    <div class="chapter-body-content">
      <h1 class="chapter-title">
        <span class="chapter-title-prefix">
          {{ titlePrefix }}
        </span>
        <br />
        <span class="chapter-title-content">
          {{ title }}
        </span>
      </h1>
      <h2 class="chapter-subtitle">{{ subtitle }}</h2>
      <Picture v-if="image" :asset="image.asset" />
    </div>

    <div class="chapter-footer-content" />

    <div class="chapter-header-right" />
    <div class="chapter-body-right" />
    <div class="chapter-footer-right" />
  </div>
</template>

<script>
import Picture from '~/components/typography/Picture.vue'

export default {
  name: 'Cover',
  components: { Picture },
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    number: {
      type: Number,
      required: true,
    },
    image: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
  computed: {
    titlePrefix() {
      return `Глава ${this.number}.`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.chapter {
  display: grid;
  grid-template-columns: $spread-outer-padding-sm 1fr $spread-outer-padding-sm;
  grid-template-rows: $spread-header-size-sm 1fr $spread-footer-size-sm;
  grid-template-areas:
    'header-left header-content header-right'
    'body-left body-content body-right'
    'footer-left footer-content footer-right';

  &-header-left,
  &-body-left,
  &-footer-left {
    background-image: linear-gradient(to left, var(--paper-color), var(--gradient-target));
  }
  &-header-left {
    grid-area: header-left;
  }
  &-body-left {
    grid-area: body-left;
  }
  &-footer-left {
    grid-area: footer-left;
  }

  &-header-content,
  &-body-content,
  &-footer-content {
    background-color: var(--paper-color);
  }
  &-header-content {
    grid-area: header-content;
  }
  &-body-content {
    grid-area: body-content;
    text-align: center;
    overflow: hidden;
  }
  &-footer-content {
    grid-area: footer-content;
  }

  &-header-right,
  &-body-right,
  &-footer-right {
    background-image: linear-gradient(to right, var(--paper-color), var(--gradient-target));
  }
  &-header-right {
    grid-area: header-right;
  }
  &-body-right {
    grid-area: body-right;
  }
  &-footer-right {
    grid-area: footer-right;
  }

  &-title {
    padding-bottom: 30px;
    line-height: 1.3;
    word-wrap: break-word;
  }

  &-title-prefix {
    font-size: 36px;
    letter-spacing: 5px;
    text-transform: initial;
  }

  &-title-content {
    font-size: 54px;
    letter-spacing: 9px;
    text-transform: uppercase;
  }
}

@media (min-width: $width-md) {
  .chapter {
    grid-template-rows: $spread-header-size-md 1fr $spread-footer-size-md;
    grid-template-columns: 30% 1fr 30%;

    &-title-prefix {
      font-size: 54px;
      letter-spacing: 10px;
    }

    &-title-content {
      font-size: 90px;
      text-transform: uppercase;
      letter-spacing: 18px;
    }
  }
}
</style>
