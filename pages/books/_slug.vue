<template>
  <div
    class="book"
    :class="`book_${book.slug.current}`"
    :style="{
      '--paper-color': book.paperColor,
      '--text-color': book.textColor,
      '--gradient-target-sm': book.paperColor,
      '--gradient-target-md': book.gradientTarget,
    }"
  >
    <Node
      v-for="(node, nodeIndex) in book.nodes"
      :key="nodeIndex"
      :type="node._type"
      :index="nodeIndex + 1"
      :first-page="node.firstPage"
      :second-page="node.secondPage"
      :first-image="node.firstImage"
      :second-image="node.secondImage"
      :title="node.title"
      :subtitle="node.subtitle"
      :middle="node.middle"
      :number="node.number"
      :image="node.image"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Node from '~/components/books/Node.vue'

export default {
  components: { Node },
  layout: 'book',
  async fetch({ params: { slug }, store }) {
    await store.dispatch('book/GET_BOOK', { slug })
  },
  head() {
    return {
      title: `${this.book.title}. Всеволенд`,
    }
  },
  computed: {
    ...mapState('book', { book: 'book' }),
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.book {
  color: var(--text-color);
  --gradient-target: var(--gradient-target-sm);
}

@media (min-width: $width-md) {
  .book {
    --gradient-target: var(--gradient-target-md);
  }
}
</style>
