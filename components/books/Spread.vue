<template>
  <div class="spread">
    <div class="spread--header">
      <div />
    </div>

    <div class="spread--body">
      <div v-if="firstPage" class="spread--first-page">
        <Page
          :content="firstPage.content"
          :with-leadin="firstPage.withLeadin"
          :with-initial="firstPage.withInitial"
        />
      </div>
      <div v-if="firstImage" class="spread--first-image">
        <Picture :asset="firstImage.asset" />
      </div>
      <div v-if="secondPage" class="spread--second-page">
        <Page
          :content="secondPage.content"
          :with-leadin="secondPage.withLeadin"
          :with-initial="secondPage.withInitial"
        />
      </div>
      <div v-if="secondImage" class="spread--second-image">
        <Picture :asset="secondImage.asset" />
      </div>
    </div>

    <div class="spread--footer">
      <div class="spread--index">{{ index }}</div>
    </div>
  </div>
</template>

<script>
import Page from '~/components/books/Page.vue'
import Picture from '~/components/typography/Picture.vue'

export default {
  name: 'Spread',
  components: { Page, Picture },
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
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.spread {
  display: grid;
  grid-template-rows: $spread-header-size-sm 1fr $spread-footer-size-sm;
  grid-template-columns: 1fr;

  &--body {
    display: grid;
    grid-template-columns: 1fr;
    padding-left: $spread-outer-padding-sm;
    padding-right: $spread-outer-padding-sm;
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

  &--index {
    text-align: right;
  }

  &--first-page,
  &--first-image,
  &--second-page,
  &--second-image {
    grid-column: 1;
  }
  &--first-page,
  &--first-image {
    grid-row: 1;
  }
  &--second-page,
  &--second-image {
    grid-row: 2;
  }

  &--first-image img,
  &--second-image img {
    position: sticky;
    top: 0;
  }
}

@media (min-width: $width-md) {
  .spread {
    grid-template-rows: $spread-header-size-md 1fr $spread-footer-size-md;

    &--header {
      padding-left: $spread-outer-padding-md;
      padding-right: $spread-outer-padding-md;
    }

    &--body {
      grid-template-columns: 1fr $spread-inner-padding-md 1fr;
      grid-template-rows: 1fr;
      padding-left: $spread-outer-padding-md;
      padding-right: $spread-outer-padding-md;
    }

    &--first-page,
    &--first-image,
    &--second-page,
    &--second-image {
      grid-row: 1;
    }
    &--first-page,
    &--first-image {
      grid-column: 1;
    }
    &--second-page,
    &--second-image {
      grid-column: 3;
    }
  }
}
</style>
