<template>
  <div class="embed embed_code" :class="emotionClass">
    <pre>
      <code v-highlight :class="syntax">{{ content }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Code',
  props: {
    content: {
      type: String,
      required: true,
    },
    syntax: {
      type: String,
      required: true,
    },
    emotion: {
      type: String,
      required: true,
    },
  },
  computed: {
    emotionClass() {
      return `embed_code_emotion_${this.emotion}`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.embed {
  margin-bottom: 36px;
}

.embed_code {
  pre {
    font-family: $font-family-mono;
  }

  code {
    white-space: pre;
    padding-left: 18px;
  }

  .hljs {
    background-color: unset;
  }
}

.embed_code_emotion_positive {
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: #228b22;
}

.embed_code_emotion_negative {
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: #dc143c;
}
</style>
