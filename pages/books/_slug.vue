<template>
  <div class="book">
    <Spread
      v-for="(spread, spreadIndex) in book.spreads"
      :key="spreadIndex"
      :number="spread.number"
    >
      <Page :content="spread.firstPage.content" />
      <Page :content="spread.secondPage.content" />
    </Spread>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Spread from '~/components/books/Spread.vue'
import Page from '~/components/books/Page.vue'

export default {
  components: { Spread, Page },
  layout: 'book',
  async fetch({ params: { slug }, store }) {
    await store.dispatch('book/GET_BOOK', { slug })
  },
  computed: {
    ...mapState('book', { book: 'book' }),
  },
}
</script>
