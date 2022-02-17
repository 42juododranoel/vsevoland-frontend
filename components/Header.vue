<template>
  <div class="header">
    <NuxtLink to="/">
      <img class="header--avatar" src="~/assets/images/me-circle.jpg" />
    </NuxtLink>
    <span class="header--content">
      <span class="header--name-emoji">
        <span class="header--name">{{ category.name }}</span>
        <span class="header--emoji">{{ category.emoji }}</span>
      </span>
      <span class="header--sections">
        <span
          v-for="(category, categoryIndex) in categories"
          :key="categoryIndex"
          class="header--section"
        >
          <Link :target="`/${category.slug.current}`">{{ category.title }}</Link>
        </span>
      </span>
    </span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Link from '~/components/typography/Link.vue'

export default {
  name: 'Header',
  components: { Link },
  async fetch() {
    await this.GET_CATEGORIES()
  },
  computed: {
    ...mapState('categories', { categories: 'categories' }),
    ...mapState('category', { category: 'category' }),
  },
  methods: {
    ...mapActions('categories', ['GET_CATEGORIES']),
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.header {
  padding-top: 10px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;

  &--avatar {
    border-radius: 50%;
    width: 70px;
    height: auto;
  }

  &--content {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    padding-top: 5px;
    font-family: $font-family-caption;
  }

  &--name-emoji {
    padding-left: 5px;
  }

  &--sections {
    display: flex;
    flex-direction: column;
  }

  &--section {
    padding-right: 5px;
    padding-left: 5px;
  }
}

@media (min-width: $width-md) {
  .header {
    &--sections {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
