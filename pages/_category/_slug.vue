<template>
  <div class="row">
    <div class="col-8-md off-2-md">
      <Content :blocks="post.content" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Content from '~/components/Content.vue'

export default {
  components: { Content },
  async fetch({ params: { slug }, store }) {
    await store.dispatch('post/GET_POST', { slug })
  },
  computed: {
    ...mapState('post', { post: 'post' }),
  },
}
</script>
