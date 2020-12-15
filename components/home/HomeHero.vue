<template>
  <div v-editable="blok" class="hero">
    <div class="hero__container">
      <h1 class="hero__title">
        <StoryHeadline :blok="blok.headline[0]" />
      </h1>
      <StoryExternalLink :blok="blok.action[0]">
        {{ blok.action[0].label }}
      </StoryExternalLink>
    </div>
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
.hero {
  @apply flex items-center justify-center min-h-screen w-screen;

  &__container {
    @apply container flex flex-col items-center justify-center mx-auto;
  }

  &__title {
    @apply max-w-4xl mx-auto text-center mb-16;
  }
}
</style>
