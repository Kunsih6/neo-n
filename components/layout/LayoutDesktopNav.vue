<template>
  <div class="navbar">
    <div class="navbar__container">
      <span class="navbar__title">Kunsih</span>
      <LayoutNavLinks class="navbar__links" />
      <LayoutSocials class="navbar__socials" />
    </div>
  </div>
</template>

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
