<template>
  <div class="layout layout_blog">
    <Header :categories="categories" :current-category="category" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'BlogLayout',
  components: { Header, Footer },
  async fetch() {
    await this.GET_CATEGORIES()
  },
  computed: {
    ...mapState('categories', { categories: 'categories' }),
    ...mapState('category', { category: 'category' }),
  },
  methods: {
    ...mapActions('categories', ['GET_CATEGORIES']),
  },
}
</script>
