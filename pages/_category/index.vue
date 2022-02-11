<template>
  <div class="row">
    <div class="col">
      <PostList :category="category" :posts="posts" :labels="labels" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostList from '~/components/blog/PostList.vue'

export default {
  components: { PostList },
  props: {
    label: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  async fetch({ params: { category }, store }) {
    await Promise.all([
      store.dispatch('posts/GET_POSTS', { category }),
      store.dispatch('category/GET_CATEGORY', { slug: category }),
      store.dispatch('labels/GET_LABELS', { category }),
    ])
  },
  head() {
    return {
      title: `${this.category.title}. Всеволенд`,
    }
  },
  computed: {
    ...mapState('posts', { posts: 'posts' }),
    ...mapState('category', { category: 'category' }),
    ...mapState('labels', { labels: 'labels' }),
  },
}
</script>
