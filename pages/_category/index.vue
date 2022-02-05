<template>
  <div class="row">
    <div class="col">
      <PostList :category="category" :posts="posts" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostList from '~/components/blog/PostList.vue'

export default {
  components: { PostList },
  async fetch({ params: { category }, store }) {
    await Promise.all([
      store.dispatch('posts/GET_POSTS', { category }),
      store.dispatch('category/GET_CATEGORY', { slug: category }),
    ])
  },
  computed: {
    ...mapState('posts', { posts: 'posts' }),
    ...mapState('category', { category: 'category' }),
  },
}
</script>
