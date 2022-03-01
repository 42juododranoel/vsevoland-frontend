<template>
  <div class="cover" :class="{ cover_centered: isCentered }">
    <div class="cover-header-left" />
    <div class="cover-body-left" />
    <div class="cover-footer-left" />

    <div class="cover-header-content" />

    <div class="cover-body-content">
      <h1 class="cover-titles">
        <div class="cover-titles-title">{{ title }}</div>
        <div v-if="middle" class="cover-titles-middle">{{ middle }}</div>
        <div v-if="subtitle" class="cover-titles-subtitle">{{ subtitle }}</div>
      </h1>
      <Picture v-if="image" :asset="image.asset" />
    </div>

    <div class="cover-footer-content" />

    <div class="cover-header-right" />
    <div class="cover-body-right" />
    <div class="cover-footer-right" />
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
    middle: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.cover {
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
    align-self: center;
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

  &-titles {
    line-height: 1.4;
    padding-bottom: 50px;

    &-title {
      font-size: 54px;
      letter-spacing: 9px;
      text-transform: uppercase;
    }

    &-middle {
      font-size: 36px;
      padding-bottom: 10px;
    }

    &-subtitle {
      font-size: 72px;
      font-style: italic;
    }
  }
}

@media (min-width: $width-md) {
  .cover {
    grid-template-rows: $spread-header-size-md 1fr $spread-footer-size-md;
    grid-template-columns: 30% 1fr 30%;

    &-titles {
      &-title {
        font-size: 90px;
        text-transform: uppercase;
        letter-spacing: 18px;
      }
    }
  }
}
</style>
