<template>
  <div class="book" :class="`book--${book.slug.current}`">
    <template v-for="(spread, spreadIndex) in book.spreads">
      <Spread
        v-if="spread._type == 'chapter'"
        :key="spreadIndex"
        :number="undefined"
        is-chapter="true"
      >
        <Chapter
          :title="spread.title"
          :subtitle="spread.subtitle"
          :number="spread.number"
          :image="spread.image"
        />
      </Spread>

      <Spread
        v-if="spread._type == 'spread'"
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
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Spread from '~/components/books/Spread.vue'
import Page from '~/components/books/Page.vue'
import Chapter from '~/components/books/Chapter.vue'

export default {
  components: { Spread, Page, Chapter },
  layout: 'book',
  async fetch({ params: { slug }, store }) {
    await store.dispatch('book/GET_BOOK', { slug })
  },
  computed: {
    ...mapState('book', { book: 'book' }),
  },
}
</script>
