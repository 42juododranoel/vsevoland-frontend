<template>
  <div class="post-list">
    <div v-if="category" class="post-list--header">
      <div class="row">
        <div class="col-10-md">
          <Heading1>{{ category.title }}</Heading1>
          <Paragraph class="post-list--description">
            {{ category.description }}
          </Paragraph>
          <div class="post-list--labels">
            <span class="post-list--labels-prefix">Рубрики:</span>
            <span class="post-list--labels-content">
              <Link
                v-for="(label, labelIndex) in labels"
                :key="labelIndex"
                class="post-list--label"
                prefix="#"
                :postfix="labelIndex + 1 !== labels.length ? ',' : undefined"
                :target="`/${category.slug.current}/labels/${label.slug.current}`"
              >
                {{ label.title }}
              </Link>
            </span>
          </div>
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
            :published-at="post.publishedAt"
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
import Link from '~/components/typography/Link.vue'

export default {
  name: 'PostList',
  components: { PostListItem, Heading1, Paragraph, Link },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: false,
      default: undefined,
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

  &--description {
    margin-bottom: 27px;
  }

  &--labels {
    font-family: $font-family-sans;
  }

  &--labels-prefix {
    float: left;
    padding-right: 10px;
  }
}
</style>
