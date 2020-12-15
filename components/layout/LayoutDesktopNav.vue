<template>
  <div v-editable="blok" class="navbar">
    <div class="navbar__container">
      <StoryHeadline :blok="blok.name[0]" class="navbar__title" />
      <LayoutNavLinks :sections="blok.sections" class="navbar__links" />
      <LayoutSocials :socials="blok.socials" class="navbar__socials" />
    </div>
  </div>
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
.navbar {
  &__container {
    @apply container flex mx-auto py-4;
  }
  &__socials {
    @apply flex-1 justify-end min-w-min ml-auto;
  }

  &__title {
    @apply 3xl:text-xl flex-1 font-logo justify-end min-w-min text-white text-xl tracking-logo;
  }
}
</style>
