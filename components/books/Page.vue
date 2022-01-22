<template>
  <div class="page" :class="{ 'page_with-leadin': withLeadin, 'page_with-initial': withInitial }">
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
