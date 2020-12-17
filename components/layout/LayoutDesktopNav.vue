<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__title">
        <StoryHeadline :blok="name" />
      </div>
      <LayoutNavLinks class="navbar__links" />
      <LayoutSocials class="navbar__socials" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      name: 'layout/getName',
    }),
  },
}
</script>

<style lang="postcss" scoped>
.navbar {
  &__container {
    @apply container flex mx-auto py-4;
  }
  &__socials {
    @apply flex-1 justify-end min-w-min ml-auto;
  }

  &__title {
    @apply 3xl:text-2xl flex-1 font-logo justify-end min-w-min text-white text-xl tracking-logo;
  }
}
</style>
