<template>
  <div class="h3-wrapper">
    <h3>
      <slot />
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Heading3',
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.h3-wrapper {
  margin-bottom: 17px;

  h3 {
    font-size: $font-size-sm;
    margin-top: -11px;
    margin-bottom: -7px;
  }
}

@media (min-width: $width-lg) {
  .h3-wrapper {
    margin-bottom: 27px;

    h3 {
      font-size: $font-size-lg;
      margin-top: -17px;
      margin-bottom: -10px;
    }
  }
}
</style>
