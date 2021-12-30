<template>
  <div class="post">
    <h1 class="page__title">
      {{ post.title }}
    </h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  async fetch({ params: { slug }, store }) {
    await store.dispatch('post/GET_POST', { slug })
  },
  computed: {
    ...mapState('post', { post: 'post' }),
  },
}
</script>
