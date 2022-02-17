<template>
  <div class="row">
    <div class="col">
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostList from '~/components/blog/PostList.vue'

export default {
  components: { PostList },
  layout: 'blog',
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('posts/GET_POSTS', {}),
      store.dispatch('category/RESET_CATEGORY'),
    ])
  },
  head() {
    return {
      title: `Блог Всеволода Скрипника — Всеволенд`,
    }
  },
  computed: {
    ...mapState('posts', { posts: 'posts' }),
  },
}
</script>
