<template>
  <footer v-editable="blok" class="layout-footer">
    <div class="layout-footer__decoration-top" />
    <div class="layout-footer__container">
      <StoryExternalLink :blok="blok.email[0]" no-decorator>
        {{ blok.email[0].label }}
      </StoryExternalLink>
    </div>
    <div class="layout-footer__decoration-bottom" />
  </footer>
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
.layout-footer {
  &__container {
    @apply container mx-auto text-center py-12;
  }

  &__decoration-bottom {
    @apply bg-gradient-to-r from-primary-dark via-primary to-primary-dark h-4 w-full;

    background-size: 400% 100%;
    animation: gradientTransition 4s infinite linear forwards;
    clip-path: polygon(
      0% 40%,
      39% 40%,
      40% 0%,
      60% 0%,
      61% 40%,
      100% 40%,
      100% 100%,
      0% 100%
    );
  }

  &__decoration-top {
    @apply bg-gradient-to-r from-primary-dark via-primary to-primary-dark h-3 w-5/12 mx-auto;

    background-size: 400% 100%;
    animation: gradientTransition 4s infinite linear forwards reverse;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 60%,
      75% 60%,
      74% 100%,
      26% 100%,
      25% 60%,
      0% 60%
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
