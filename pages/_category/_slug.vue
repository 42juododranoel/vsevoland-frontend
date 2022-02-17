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
  layout: 'blog',
  async fetch({ params: { category, slug }, store }) {
    await Promise.all([
      store.dispatch('post/GET_POST', { slug }),
      store.dispatch('category/GET_CATEGORY', { slug: category }),
    ])
  },
  head() {
    return {
      title: `${this.post.title}. Всеволенд`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
      ],
    }
  },
  computed: {
    ...mapState('post', { post: 'post' }),
    ...mapState('category', { category: 'category' }),
  },
}
</script>
