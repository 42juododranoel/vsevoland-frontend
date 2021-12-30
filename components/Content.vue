<template>
  <SanityContent :blocks="blocks" :serializers="serializers" />
</template>

<script>
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'

export default {
  name: 'Content',
  components: { SanityContent },
  props: {
    blocks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      serializers: {},
    }
  },
}
</script>

<style lang="postcss" scoped></style>
