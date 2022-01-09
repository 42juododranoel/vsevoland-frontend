<template>
  <div class="page" :class="{ 'page--with-leadin': withLeadin, 'page--with-initial': withInitial }">
    <Content :blocks="content" />
  </div>
</template>

<script>
import Content from '~/components/Content.vue'

export default {
  name: 'Page',
  components: { Content },
  props: {
    content: {
      type: Array,
      required: true,
    },
    withLeadin: {
      type: Boolean,
      default: false,
    },
    withInitial: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.page {
  grid-column: 1;

  &:first-of-type {
    grid-row: 1;
    padding-left: $page-outer-padding-sm;
    padding-right: $page-inner-padding-sm;
  }

  &:last-of-type {
    grid-row: 2;
    padding-left: $page-inner-padding-sm;
    padding-right: $page-outer-padding-sm;
  }
}

@media (min-width: $width-md) {
  .page {
    grid-row: 1;

    &:first-of-type {
      grid-row: 1;
      grid-column: 1;
      padding-left: $page-outer-padding-md;
      padding-right: $page-inner-padding-md;
    }

    &:last-of-type {
      grid-row: 1;
      grid-column: 2;
      padding-left: $page-inner-padding-md;
      padding-right: $page-outer-padding-md;
    }
  }
}
</style>
