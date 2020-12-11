<template>
  <figure class="layout-bg">
    <img
      class="layout-bg__img"
      src="~/assets/images/neon-bg.jpg"
      alt="background"
    />
  </figure>
</template>
<style lang="postcss" scoped>
.layout-bg {
  &__img {
    @apply absolute h-full object-cover w-full;
  }

  &::after {
    @apply w-full h-full fixed block;

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
