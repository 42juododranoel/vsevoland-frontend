<template>
  <div class="spread" :class="{ spread_centered: isCentered }">
    <div class="spread-header-left" />
    <div class="spread-body-left" />
    <div class="spread-footer-left" />

    <div class="spread-header-content" />

    <div class="spread-body-content">
      <div v-if="firstPage" class="spread-first-page">
        <Page
          :content="firstPage.content"
          :with-leadin="firstPage.withLeadin"
          :with-initial="firstPage.withInitial"
        />
      </div>
      <div v-if="firstImage" class="spread-first-image">
        <Illustration :asset="firstImage.asset" />
      </div>
      <div v-if="secondPage" class="spread-second-page">
        <Page
          :content="secondPage.content"
          :with-leadin="secondPage.withLeadin"
          :with-initial="secondPage.withInitial"
        />
      </div>
      <div v-if="secondImage" class="spread-second-image">
        <Illustration :asset="secondImage.asset" />
      </div>
    </div>

    <div class="spread-footer-content">
      {{ index }}
    </div>

    <div class="spread-header-right" />
    <div class="spread-body-right" />
    <div class="spread-footer-right" />
  </div>
</template>

<script>
import Page from '~/components/books/Page.vue'
import Illustration from '~/components/typography/Illustration.vue'

export default {
  name: 'Spread',
  components: { Page, Illustration },
  props: {
    index: {
      type: Number,
      required: true,
    },
    firstPage: {
      type: Object,
      required: false,
      default: undefined,
    },
    secondPage: {
      type: Object,
      required: false,
      default: undefined,
    },
    firstImage: {
      type: Object,
      required: false,
      default: undefined,
    },
    secondImage: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
  data() {
    return {
      isCentered:
        (this.firstPage && !(this.secondPage || this.secondImage)) ||
        (this.secondPage && !(this.firstPage || this.firstImage)),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.spread {
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
    display: grid;
    grid-template-columns: 1fr;
  }
  &-footer-content {
    grid-area: footer-content;
    text-align: right;
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

  &-first-page,
  &-first-image,
  &-second-page,
  &-second-image {
    grid-column: 1;
  }
  &-first-page,
  &-first-image {
    grid-row: 1;
  }
  &-second-page,
  &-second-image {
    grid-row: 2;
  }

  &-first-image img,
  &-second-image img {
    position: sticky;
    top: 0;
  }
}

@media (min-width: $width-md) {
  .spread {
    grid-template-rows: $spread-header-size-md 1fr $spread-footer-size-md;
    grid-template-columns: $spread-outer-padding-md 1fr $spread-outer-padding-md;

    &-body-content {
      grid-template-columns: 1fr $spread-inner-padding-md 1fr;
      grid-template-rows: 1fr;
    }

    &-first-page,
    &-first-image,
    &-second-page,
    &-second-image {
      grid-row: 1;
    }
    &-first-page,
    &-first-image {
      grid-column: 1;
    }
    &-second-page,
    &-second-image {
      grid-column: 3;
    }

    &.spread_centered {
      grid-template-columns: 30% 1fr 30%;

      .spread-body-content {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
