<template>
  <div class="layout-bg" />
</template>
<style lang="postcss" scoped>
.layout-bg {
  @apply bg-center bg-cover bg-layout;

  &::after {
    @apply block fixed h-120 w-full;

    background: linear-gradient(
      0deg,
      rgba(7, 11, 35, 1) 0%,
      rgba(7, 11, 35, 0.8) 35%,
      rgba(7, 11, 35, 0.5) 65%,
      rgba(7, 11, 35, 0.25) 100%
    );
    content: '';
  }
}
</style>
