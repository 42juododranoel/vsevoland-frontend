<template>
  <div class="row">
    <div class="col-8-md off-2-md">
      <Heading1 :content="post.title" />
      <Content :blocks="post.content" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Heading1 from '~/components/typography/Heading1.vue'
import Content from '~/components/Content.vue'

export default {
  components: { Heading1, Content },
  async fetch({ params: { slug }, store }) {
    await store.dispatch('post/GET_POST', { slug })
  },
  computed: {
    ...mapState('post', { post: 'post' }),
  },
}
</script>
