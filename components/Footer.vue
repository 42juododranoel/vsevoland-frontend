<template>
  <div class="footer">
    <hr class="footer--hr" />
    <span class="footer--emoji">💪(ФωФ💪</span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.footer {
  font-family: $font-family-sans;

  &--hr {
    border-top: 1px solid #bebebe;
  }

  &--emoji {
    float: right;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>
