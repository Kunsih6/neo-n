<template>
  <div v-editable="blok" class="story-rich-text">
    <rich-text-renderer :document="blok.content" />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      default: null,
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="postcss" scoped>
.story-rich-text {
  @apply max-w-4xl text-center;
}
</style>
