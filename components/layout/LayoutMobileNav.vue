<template>
  <div class="mobile-nav" @click.self="close">
    <div class="mobile-nav__content" @click="close">
      <div class="mobile-nav__container">
        <span class="mobile-nav__title">Kunsih</span>
        <LayoutNavLinks class="mobile-nav__links" />
        <LayoutSocials />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style lang="postcss" scoped>
.mobile-nav {
  @apply h-screen w-screen;

  &__container {
    @apply container mx-auto text-center;
  }

  &__content {
    @apply border-b border-opacity-10 border-white
    bg-bg max-h-screen overflow-y-auto py-24;

    background-clip: padding-box;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 95%,
      90% 95%,
      85% 100%,
      15% 100%,
      10% 95%,
      0% 95%
    );
  }

  &__links {
    @apply my-12;
  }

  &__title {
    @apply font-logo text-3xl text-white tracking-logo;
  }
}
</style>
