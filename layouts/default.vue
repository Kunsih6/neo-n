<template>
  <div class="layout">
    <div class="layout__bg" />
    <LayoutMobileNavTrigger
      v-model="mobileMenuShowing"
      class="layout__mobile-nav-trigger"
    />
    <LayoutMobileNav
      :class="{ 'layout__mobile-nav--open': mobileMenuShowing }"
      class="layout__mobile-nav"
      @close="mobileMenuShowing = false"
    />
    <LayoutDesktopNav class="layout__desktop-nav" />
    <Nuxt />
    <LayoutFooter class="layout__footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuShowing: false,
    }
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()

    return {
      title: this.$t('meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.description'),
        },
        ...i18nSeo.meta,
      ],
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      link: [...i18nSeo.link],
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize(e) {
      this.mobileMenuShowing = false
    },
  },
}
</script>

<style lang="postcss" scoped>
.layout {
  @apply relative;

  &__bg {
    @apply -z-10 bg-center bg-cover bg-layout fixed h-screen w-screen;
  }

  &__desktop-nav {
    @apply absolute hidden lg:flex top-0 left-2/4 transform -translate-x-1/2 w-full;
  }

  &__footer {
    @apply mt-32;
  }

  &__mobile-nav {
    @apply fixed left-0 lg:hidden top-0 w-full z-40
      opacity-0
      origin-top
      transform scale-y-0 -translate-y-2/4
      transition-all duration-150;

    &--open {
      @apply opacity-100 transform scale-y-100 translate-y-0;
    }
  }

  &__mobile-nav-trigger {
    @apply fixed lg:hidden right-4 top-4 z-50;
  }
}
</style>
