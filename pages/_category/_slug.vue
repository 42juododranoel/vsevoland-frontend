<template>
  <div class="post">
    <Heading1 :content="post.title" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Heading1 from '~/components/typography/Heading1.vue'

export default {
  components: { Heading1 },
  async fetch({ params: { slug }, store }) {
    await store.dispatch('post/GET_POST', { slug })
  },
  computed: {
    ...mapState('post', { post: 'post' }),
  },
}
</script>
