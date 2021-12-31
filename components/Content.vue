<template>
  <SanityContent :blocks="blocks" :serializers="serializers" />
</template>

<script>
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
import Heading3 from '~/components/typography/Heading3.vue'
import Paragraph from '~/components/typography/Paragraph.vue'

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
      serializers: {
        styles: {
          h3: Heading3,
          normal: Paragraph,
        },
      },
    }
  },
}
</script>
