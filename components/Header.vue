<template>
  <div class="header">
    <NuxtLink to="/">
      <img class="header--avatar" src="~/assets/images/me-circle.jpg" />
    </NuxtLink>
    <span class="header--sections">
      <span class="header--section"><Link target="/drawing">Рисование</Link></span>
      <span class="header--section"><Link target="/writing">Писательство</Link></span>
      <span class="header--section"><Link target="/fencing">Фехтование</Link></span>
      <span class="header--section"><Link target="/programming">Программирование</Link></span>
    </span>
  </div>
</template>

<script>
import Link from '~/components/typography/Link.vue'

export default {
  name: 'Header',
  components: { Link },
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

  &--sections {
    font-family: $font-family-caption;
    padding-top: 5px;
  }

  &--section {
    padding-left: 10px;
  }
}
</style>
