<template>
  <div class="post-list">
    <div class="row">
      <div class="col-7-md">
        <Heading1 v-if="category">{{ category.title }}</Heading1>
        <div v-if="labels" class="post-list--labels">
          <span class="post-list--labels-prefix">Рубрики:</span>
          <span class="post-list--labels-content">
            <Link
              v-for="(label, labelIndex) in labels"
              :key="labelIndex"
              class="post-list--label"
              prefix="#"
              :postfix="labelIndex + 1 !== labels.length ? ',' : undefined"
              :target="`/${label.category.slug.current}/labels/${label.slug.current}`"
            >
              {{ label.title }}
            </Link>
          </span>
        </div>
        <div class="post-list--content">
          <div v-for="(post, postIndex) in posts" :key="postIndex">
            <PostListItem
              :title="post.title"
              :description="post.description"
              :slug="post.slug"
              :labels="post.labels"
              :category="post.category"
              :do-show-category="!category"
              :published-at="post.publishedAt"
              :redirect="post.redirect"
            />
          </div>
        </div>
      </div>
      <div v-if="category && category.background" class="off-8-md col-8-md">
        <Picture :asset="category.background.asset" />
      </div>
    </div>
  </div>
</template>

<script>
import PostListItem from '~/components/blog/PostListItem.vue'
import Heading1 from '~/components/typography/Heading1.vue'
import Link from '~/components/typography/Link.vue'
import Picture from '~/components/typography/Picture.vue'

export default {
  name: 'PostList',
  components: { PostListItem, Heading1, Link, Picture },
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
    margin-bottom: 63px;

    &::after {
      display: block;
      content: '';
      clear: both;
    }
  }

  &--labels-prefix {
    float: left;
    padding-right: 10px;
  }
}
</style>
