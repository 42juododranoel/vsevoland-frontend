<template>
  <div class="row">
    <div class="col-8-md">
      <Heading1>{{ post.title }}</Heading1>
      <Content :blocks="post.content" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Content from '~/components/Content.vue'
import Heading1 from '~/components/typography/Heading1.vue'

export default {
  components: { Content, Heading1 },
  async fetch({ params: { slug }, store }) {
    await store.dispatch('post/GET_POST', { slug })
  },
  computed: {
    ...mapState('post', { post: 'post' }),
  },
}
</script>
