<template>
  <div class="chapter">
    <div class="chapter--header">
      <div />
    </div>

    <div class="chapter--body">
      <div class="chapter--title">
        <span class="chapter--title-prefix">
          {{ titlePrefix }}
        </span>
        <br />
        <span class="chapter--title-content">
          {{ title }}
        </span>
      </div>

      <div class="chapter--image">
        <Picture :asset="image.asset" />
      </div>

      <div class="chapter--subtitle">
        <span class="chapter--subtitle-prefix">или,</span>
        <br />
        <span class="chapter--subtitle-content">
          <span class="chapter--subtitle-laquo">«</span>{{ subtitle }}<span>»</span>
        </span>
      </div>
    </div>

    <div class="chapter--footer">
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
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.chapter {
  display: grid;
  grid-template-rows: $spread-header-size-sm 1fr $spread-footer-size-sm;
  grid-template-columns: 1fr;

  &--body {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content max-content;
    padding-left: $spread-outer-padding-sm;
    padding-right: $spread-outer-padding-sm;
    font-family: $font-family-caption;
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
    &-prefix {
      font-weight: normal;
      font-size: 36px;
      margin-bottom: 27px;
    }

    &-content {
      text-transform: uppercase;
      font-size: 81px;
      line-height: 81px;
      font-weight: bold;
      margin-left: 2px;
    }
  }

  &--subtitle {
    font-style: italic;
    font-family: 'PT Serif';
    text-align: left;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    &-prefix {
      font-size: 27px;
      margin-bottom: 5px;
    }

    &-content {
      font-size: 54px;
      line-height: 54px;
    }

    &-laquo {
      margin-left: -27px;
    }
  }
}

@media (min-width: $width-md) {
  .chapter {
    grid-template-rows: $spread-header-size-md 1fr $spread-footer-size-md;

    &--header {
      padding-left: $spread-outer-padding-md;
      padding-right: $spread-outer-padding-md;
    }

    &--body {
      grid-template-rows: 1fr;
      grid-template-columns: 25% auto 25%;
      padding-left: $spread-outer-padding-md;
      padding-right: $spread-outer-padding-md;
    }
  }
}
</style>
