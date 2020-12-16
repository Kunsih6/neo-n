<template>
  <div :class="{ 'button-action': !noDecorator }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    noDecorator: {
      default: false,
      required: false,
      type: Boolean,
    },
  },
}
</script>

<style lang="postcss" scoped>
.button-action {
  @apply cursor-pointer pb-0 pt-1 px-2 relative;

  &::after,
  &::before {
    @apply block absolute
      bg-gradient-to-r from-secondary to-secondary-dark
      bg-center
      transform -translate-x-2/4;

    content: '';
  }

  &::after {
    @apply bottom-0 h-1 left-2/4 w-5/12 min-w-button-decorator
      transition-all duration-150 ease-in-out;
  }

  &::before {
    @apply -bottom-1 h-1 left-2/4 w-8;

    background-size: 150%;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
  }

  &:active::after {
    @apply w-full;
  }
}

@media (hover: hover) and (pointer: fine) {
  .button-action {
    &:hover::after {
      @apply w-10/12;
    }

    &:hover:active::after {
      @apply w-full;
    }
  }
}
</style>
