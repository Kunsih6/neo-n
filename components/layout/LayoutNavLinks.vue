<template>
  <ul class="layout-nav-links">
    <li class="layout-nav-links__link">My work</li>
    <li class="layout-nav-links__link">About me</li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.layout-nav-links {
  > *:not(:last-child) {
    @apply mb-4;
  }
}

@screen lg {
  .layout-nav-links {
    @apply flex items-center justify-center;

    &__link {
      @apply cursor-pointer text-base py-1 px-3;
    }

    > *:not(:last-child) {
      @apply mb-0 mr-12;
    }
  }
}

@media (hover: hover) and (pointer: fine) {
  .layout-nav-links {
    &__link {
      @apply relative;

      &::before {
        @apply -left-1 absolute bg-gradient-to-b from-primary-dark opacity-0 origin-left to-primary w-3 h-4 top-2/4
          transition-all duration-150
          transform -translate-x-2 -translate-y-2/4;

        content: '';
        clip-path: polygon(0 0, 0 100%, 100% 50%);
      }

      &:hover::before {
        @apply opacity-100 transform translate-x-0 -translate-y-2/4;
      }
    }
  }
}
</style>
