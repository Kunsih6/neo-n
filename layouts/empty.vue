<template>
  <div class="layout">
    <div class="layout__bg" />
    <nuxt />
  </div>
</template>
<style lang="postcss" scoped>
.layout {
  @apply relative;

  &__bg {
    @apply -z-10 bg-center bg-cover bg-layout fixed h-screen w-screen;
  }
}
</style>
