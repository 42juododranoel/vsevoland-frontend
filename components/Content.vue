<template>
  <SanityContent :blocks="blocks" :serializers="serializers" />
</template>

<script>
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
import Heading2 from '~/components/typography/Heading2.vue'
import Heading3 from '~/components/typography/Heading3.vue'
import Paragraph from '~/components/typography/Paragraph.vue'
import LeadIn from '~/components/typography/LeadIn.vue'
import Illustration from '~/components/typography/Illustration.vue'
import Code from '~/components/embeds/Code.vue'

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
        types: {
          image: Illustration,
          code: Code,
        },
        styles: {
          h2: Heading2,
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
