<template>
  <SanityContent :blocks="content" :serializers="serializers" />
</template>

<script>
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
import Heading3 from '~/components/typography/Heading3.vue'
import Paragraph from '~/components/typography/Paragraph.vue'
import LeadIn from '~/components/typography/LeadIn.vue'
import Image from '~/components/typography/Image.vue'

export default {
  name: 'Content',
  components: { SanityContent },
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      serializers: {
        types: {
          image: Image,
        },
        styles: {
          h3: Heading3,
          normal: Paragraph,
        },
        marks: {
          'lead-in': LeadIn,
        },
      },
    }
  },
}
</script>
