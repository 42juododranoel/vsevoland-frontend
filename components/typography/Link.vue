<template>
  <span class="link--wrapper">
    <NuxtLink class="link--content" :to="target">
      <span v-if="prefix" class="link--prefix">{{ prefix }}</span>
      <span class="link--text"><slot></slot></span>
    </NuxtLink>
  </span>
</template>

<script>
export default {
  name: 'Link',
  props: {
    target: {
      type: String,
      required: false,
      default: undefined,
    },
    prefix: {
      type: String,
      required: false,
      default: undefined,
    },
  },
}
</script>

<style lang="scss" scoped>
.link--wrapper {
  color: var(--link-text-color);

  .link--prefix {
    float: left;
  }

  .link--text {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: var(--link-underline-color);
  }

  .link--content {
    &:hover {
      color: var(--link-text-color-hover);

      .link--text {
        border-bottom-color: var(--link-underline-color-hover);
      }
    }

    &.nuxt-link-exact-active,
    &.nuxt-link-active {
      color: var(--link-text-color-active);
      font-weight: bold;

      .link--text {
        border-bottom-color: var(--link-underline-color-active);
      }
    }
  }
}
</style>
