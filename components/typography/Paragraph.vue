<template>
  <div class="p-wrapper">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>
