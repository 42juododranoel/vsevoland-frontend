<template>
  <span class="a-wrapper">
    <span v-if="prefix" class="prefix">{{ prefix }}</span>
    <NuxtLink class="link" :to="target"><slot /></NuxtLink>
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
$link-text-color: rgba(39, 101, 142, 1);
$link-underline-color: rgba(39, 101, 142, 0.2);
$link-text-color-active: rgba(141, 104, 82, 1);
$link-underline-color-active: rgba(141, 104, 82, 0.8);

.a-wrapper {
  color: $link-text-color;

  .prefix {
    float: left;
  }

  .link {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: $link-underline-color;
  }

  .link.nuxt-link-exact-active,
  .link.nuxt-link-active {
    color: $link-text-color-active;
    font-weight: bold;
    border-bottom-color: $link-underline-color-active;
  }
}
</style>
