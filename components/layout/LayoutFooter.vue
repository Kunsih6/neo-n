<template>
  <footer class="layout-footer">
    <div class="layout-footer__decoration-top" />
    <div class="layout-footer__container">
      <a href="mailto:EstuardoA25@gmail.com" rel="noreferrer">
        EstuardoA25@gmail.com
      </a>
    </div>
    <div class="layout-footer__decoration-bottom" />
  </footer>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.layout-footer {
  &__container {
    @apply container mx-auto text-center py-12;
  }

  &__decoration-top {
    @apply bg-gradient-to-r from-primary-dark via-primary to-primary-dark h-6 w-full;

    background-size: 400% 100%;
    animation: gradientTransition 4s infinite linear forwards;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 60%,
      61% 60%,
      60% 100%,
      40% 100%,
      39% 60%,
      0% 60%
    );
  }

  &__decoration-bottom {
    @apply bg-gradient-to-r from-primary-dark via-primary to-primary-dark h-4 w-5/12 mx-auto;

    background-size: 400% 100%;
    animation: gradientTransition 4s infinite linear forwards reverse;
    clip-path: polygon(
      0% 40%,
      25% 40%,
      26% 0%,
      74% 0%,
      75% 40%,
      100% 40%,
      100% 100%,
      0% 100%
    );
  }
}

@keyframes gradientTransition {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 133% 0;
  }
}
</style>
