<template>
  <div class="header">
    <NuxtLink to="/">
      <img class="header--avatar" src="~/assets/images/me-circle.jpg" />
    </NuxtLink>
    <span class="header--content">
      <span class="header--name">Всеволод Скрипник 💪(ФωФ💪</span>
      <span class="header--sections">
        <span class="header--section"><Link target="/development">Разработка</Link></span>
        <span class="header--section"><Link target="/fitness">Фитнес</Link></span>
        <span class="header--section"><Link target="/drawing">Рисование</Link></span>
        <span class="header--section"><Link target="/writing">Писательство</Link></span>
        <span class="header--section"><Link target="/fencing">Фехтование</Link></span>
      </span>
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

  &--content {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    padding-top: 5px;
    font-family: $font-family-caption;
  }

  &--name {
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
