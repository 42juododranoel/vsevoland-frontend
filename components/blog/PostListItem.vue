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
    <div class="post-list__item--meta">
      <NuxtLink class="post-list__item--date" :to="path">
        <span>{{ date }},</span>
      </NuxtLink>
      <Link
        v-if="doShowCategory"
        class="post-list__item--category"
        prefix="#"
        :postfix="labels ? ',' : undefined"
        :target="`/${category.slug.current}`"
      >
        {{ category.title }}
      </Link>
      <Link
        v-for="(label, labelIndex) in labels"
        :key="labelIndex"
        class="post-list__item--label"
        prefix="#"
        :postfix="labelIndex + 1 !== labels.length ? ',' : undefined"
        :target="`/${category.slug.current}/labels/${label.slug.current}`"
      >
        {{ label.title }}
      </Link>
    </div>
  </div>
</template>

<script>
import 'dayjs/locale/ru'
import Link from '~/components/typography/Link.vue'
import Heading2 from '~/components/typography/Heading2.vue'
import Paragraph from '~/components/typography/Paragraph.vue'

const dayjs = require('dayjs')

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
    publishedAt: {
      type: String,
      required: true,
    },
    doShowCategory: {
      type: Boolean,
      required: false,
      default: false,
    },
    isHovering: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    path() {
      return `/${this.category.slug.current}/${this.slug.current}`
    },
    date() {
      const publicationDate = dayjs(this.publishedAt).locale('ru')
      const formatString = dayjs().year() === publicationDate.year() ? 'D MMMM' : 'D MMMM YYYY'
      return publicationDate.format(formatString)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.post-list__item {
  padding-bottom: 63px;

  &--meta {
    display: flex;
    flex-direction: row;
    margin-top: -11px;
    margin-bottom: -8px;
    font-family: $font-family-sans;
  }

  &--date,
  &--label,
  &--category {
    padding-right: 5px;
    display: flex;
  }

  &--label,
  &--category {
    padding-left: 5px;
  }

  &--title,
  &--description,
  &--date {
    transition: color 0.075s ease-in;
  }

  &--content {
    display: block;
    padding-bottom: 27px;

    .p-wrapper {
      margin-bottom: 0;
    }
  }

  &:hover {
    cursor: pointer;

    .post-list__item--title,
    .post-list__item--description,
    .post-list__item--date {
      color: var(--text-color-hover);
    }
  }
}
</style>
