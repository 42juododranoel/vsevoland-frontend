<template>
  <div class="post-list__item">
    <NuxtLink class="post-list__item--content" :to="path">
      <div class="post-list__item--title">
        <Heading2>{{ title }}</Heading2>
      </div>
      <div class="post-list__item--description">
        <Paragraph>{{ description }}</Paragraph>
      </div>
    </NuxtLink>
    <span class="post-list__item--labels">
      <span v-if="doShowCategory" class="post-list__item--category">
        <Link prefix="#" :target="`/${category.slug.current}`">{{ category.title }}</Link>
      </span>
      <span v-for="(label, labelIndex) in labels" :key="labelIndex" class="post-list__item--label">
        <Link prefix="#" :target="`/${category.slug.current}/${label.slug.current}`">{{
          label.title
        }}</Link>
      </span>
    </span>
  </div>
</template>

<script>
import Link from '~/components/typography/Link.vue'
import Heading2 from '~/components/typography/Heading2.vue'
import Paragraph from '~/components/typography/Paragraph.vue'

export default {
  name: 'PostListItem',
  components: { Heading2, Paragraph, Link },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: Object,
      required: true,
    },
    category: {
      type: Object,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    doShowCategory: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    path() {
      return `/${this.category.slug.current}/${this.slug.current}`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.post-list__item {
  padding-bottom: 54px;

  &--labels {
    display: flex;
    flex-direction: row;
    margin-top: -7px;
    font-family: $font-family-sans;
  }

  &--label,
  &--category {
    margin-right: 10px;
    display: flex;
  }

  &--title {
    padding-left: 10px;
    margin-left: -13px;
    border-left-style: solid;
    border-left-width: 3px;
    border-left-color: transparent;
  }

  &--title,
  &--description {
    transition: color 0.075s ease-in;
    transition: border-left-color 0.075s ease-in;
  }

  &--content {
    display: block;

    &:hover {
      .post-list__item--title {
        border-left-color: var(--link-underline-color-hover);
        color: var(--link-text-color-hover);
      }

      .post-list__item--description {
        color: var(--text-color-hover);
      }
    }
  }
}
</style>
