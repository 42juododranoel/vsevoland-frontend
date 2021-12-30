<template>
  <div class="h1-wrapper">
    <h1>{{ content }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Heading1',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>
