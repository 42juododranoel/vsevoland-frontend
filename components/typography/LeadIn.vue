<template>
  <span class="lead-in"><slot /></span>
</template>

<script>
export default {
  name: 'LeadIn',
}
</script>

<style lang="scss" scoped>
.lead-in {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 90%;
}
</style>
