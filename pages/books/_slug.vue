<template>
  <div class="book" :class="`book_${book.slug.current}`">
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
  computed: {
    ...mapState('book', { book: 'book' }),
  },
}
</script>
