<template>
  <footer class="layout-footer">
    <div class="layout-footer__decoration-top" />
    <div class="layout-footer__container">
      <StoryExternalLink
        v-for="(link, i) in links"
        :key="i"
        :blok="link"
        no-decorator
      >
        {{ link.label }}
      </StoryExternalLink>
      <div class="layout-footer__languages">
        <nuxt-link
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="layout-footer__language"
        >
          {{ locale.name }}
        </nuxt-link>
      </div>
    </div>
    <div class="layout-footer__decoration-bottom" />
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      timer: null,
    }
  },
  computed: {
    ...mapGetters({
      links: 'layout/getLinks',
    }),
  },
}
</script>

<style lang="postcss" scoped>
.layout-footer {
  @apply relative;

  &__container {
    @apply container mx-auto text-center py-6;
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

  &__language {
    @apply text-xl md:text-base;
  }

  &__languages {
    @apply flex items-center justify-center mt-6;
  }

  &__language:not(:last-child) {
    @apply mr-6;
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
