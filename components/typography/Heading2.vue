<template>
  <div class="h2-wrapper">
    <h2>
      <slot />
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Heading2',
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.h2-wrapper {
  font-size: 36px;
  line-height: 45px;
  margin-bottom: 27px;

  h2 {
    margin-top: -18px;
    margin-bottom: -9px;
  }
}
</style>
