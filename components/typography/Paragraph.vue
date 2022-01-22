<template>
  <div class="p-wrapper">
    <p>
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.p-wrapper {
  margin-bottom: 18px;
  font-size: $font-size-sm;
  line-height: $line-height-sm;

  p {
    margin-top: -12px;
    margin-bottom: -7px;
  }
}

.book {
  .p-wrapper {
    text-indent: 27px;
  }

  .page_with-leadin {
    .p-wrapper:first-of-type {
      text-indent: unset;
    }
  }

  .page_with-initial {
    .p-wrapper:first-of-type {
      p::first-letter {
        font-size: 150%;
      }
    }
  }
}

@media (min-width: $width-lg) {
  .p-wrapper {
    margin-bottom: 27px;
    font-size: $font-size-lg;
    line-height: $line-height-lg;

    p {
      margin-top: -18px;
      margin-bottom: -10px;
    }
  }

  .book {
    .p-wrapper {
      text-indent: 45px;
    }
  }
}
</style>
