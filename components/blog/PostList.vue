<template>
  <div class="post-list">
    <div v-if="category" class="post-list--header">
      <div class="row">
        <div class="col-10-md">
          <Heading1>{{ category.title }}</Heading1>
          <Paragraph>
            {{ category.description }}
          </Paragraph>
        </div>
      </div>
    </div>
    <div class="post-list--content">
      <div v-for="(post, postIndex) in posts" :key="postIndex" class="row">
        <div class="col-7-md">
          <PostListItem
            :title="post.title"
            :description="post.description"
            :slug="post.slug"
            :labels="post.labels"
            :category="post.category"
            :do-show-category="!category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostListItem from '~/components/blog/PostListItem.vue'
import Heading1 from '~/components/typography/Heading1.vue'
import Paragraph from '~/components/typography/Paragraph.vue'

export default {
  name: 'PostList',
  components: { PostListItem, Heading1, Paragraph },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    category: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.post-list {
  &--header {
    margin-bottom: 72px;
  }
}
</style>
