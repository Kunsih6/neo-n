<template>
  <div class="hero">
    <div class="hero__container">
      <h1 class="hero__title">{{ $t('hero.title') }}</h1>
      <UtilActionButton>
        <a class="button" href="#">
          {{ $t('hero.action') }}
        </a>
      </UtilActionButton>
    </div>
  </div>
</template>

<script>
export default {}
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
