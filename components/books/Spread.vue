<template>
  <div class="spread">
    <div class="spread__inner">
      <div class="spread__header" />

      <div class="spread__body">
        <div :class="isChapter ? 'spread__chapter' : 'spread__pages'">
          <slot />
        </div>
      </div>

      <div class="spread__footer">
        <span v-if="number" class="spread__number">{{ number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spread',
  props: {
    number: {
      type: Number,
      default: undefined,
    },
    isChapter: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.spread {
  display: grid;
  border-bottom: 1px solid #bebebe;

  &__number {
    float: right;
  }

  &__inner,
  &__pages,
  &__chapter {
    display: grid;
  }

  &__pages {
    grid-template-rows: minmax(100vh, min-content);
  }

  &__chapter {
    grid-template-rows: 100vh;
  }

  &__inner {
    grid-template-rows: $spread-header-size-sm 1fr $spread-footer-size-sm;
  }

  &__pages,
  &__chapter {
    grid-template-columns: 1fr;
  }
  &__footer {
    padding-left: $page-outer-padding-sm;
    padding-right: $page-outer-padding-sm;
  }
}

@media (min-width: $width-md) {
  .spread {
    &__inner {
      grid-template-rows: $spread-header-size-md 1fr $spread-footer-size-md;
    }
    &__pages {
      grid-template-columns: 1fr 1fr;
    }
    &__chapter {
      grid-template-columns: 1fr;
    }
    &__footer {
      padding-left: $page-outer-padding-md;
      padding-right: $page-outer-padding-md;
    }
  }
}
</style>
