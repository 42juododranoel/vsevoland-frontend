<template>
  <div class="node">
    <Spread
      v-if="type == 'spread'"
      :index="index"
      :first-page="firstPage"
      :second-page="secondPage"
      :first-image="firstImage"
      :second-image="secondImage"
    />
    <Chapter
      v-else-if="type == 'chapter'"
      :image="image"
      :title="title"
      :subtitle="subtitle"
      :number="number"
    />
    <Cover
      v-else-if="type == 'cover'"
      :title="title"
      :subtitle="subtitle"
      :image="image"
      :middle="middle"
    />
    <Volume v-else-if="type == 'volume'" :image="image" :title="title" />
    <div v-else>{{ type }}</div>
  </div>
</template>

<script>
import Volume from '~/components/books/Volume.vue'
import Spread from '~/components/books/Spread.vue'
import Chapter from '~/components/books/Chapter.vue'
import Cover from '~/components/books/Cover.vue'

export default {
  name: 'Node',
  components: { Spread, Chapter, Volume, Cover },
  props: {
    // Node props
    type: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    // Spread props
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
    // Chapter props
    title: {
      type: String,
      required: false,
      default: undefined,
    },
    subtitle: {
      type: String,
      required: false,
      default: undefined,
    },
    number: {
      type: Number,
      required: false,
      default: undefined,
    },
    image: {
      type: Object,
      required: false,
      default: undefined,
    },
    // Cover props also have { title, subtitle, image }
    middle: {
      type: String,
      required: false,
      default: undefined,
    },
    // Volume props are { title, image }
  },
}
</script>

<style lang="scss" scoped>
.node {
  display: grid;
  grid-template-rows: minmax(100vh, min-content);
  border-bottom: 1px solid #bebebe;
}
</style>
