<template>
  <div class="book" :class="`book--${book.slug.current}`">
    <Spread
      v-for="(spread, spreadIndex) in book.spreads"
      :key="spreadIndex"
      :number="spread.doHideNumber ? undefined : spreadIndex + 1"
    >
      <Page
        :content="spread.firstPage ? spread.firstPage.content : []"
        :with-leadin="spread.firstPage ? spread.firstPage.withLeadin : false"
        :with-initial="spread.firstPage ? spread.firstPage.withInitial : false"
      />
      <Page
        :content="spread.secondPage ? spread.secondPage.content : []"
        :with-leadin="spread.secondPage ? spread.secondPage.withLeadin : false"
        :with-initial="spread.secondPage ? spread.secondPage.withInitial : false"
      />
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
