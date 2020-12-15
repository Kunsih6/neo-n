<template>
  <ul class="layout-socials">
    <li v-for="(social, i) in socials" :key="social.name + i">
      <StoryExternalLink :blok="social" no-decorator>
        <UtilIcon class="layout-socials__icon" :name="social.name" />
      </StoryExternalLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    socials: {
      default: () => [],
      required: true,
      type: Array,
    },
  },
}
</script>

<style lang="postcss" scoped>
.layout-socials {
  @apply flex justify-center items-center;

  > *:not(:last-child) {
    @apply mr-24;
  }

  &__icon {
    @apply fill-current text-white transition-all duration-150;
  }
}

@screen lg {
  .layout-socials {
    > *:not(:last-child) {
      @apply mr-6;
    }

    &__icon {
      @apply w-5;
    }
  }
}

@media (hover: hover) and (pointer: fine) {
  .layout-socials {
    &__icon {
      @apply opacity-75;

      &:hover {
        @apply opacity-100;
      }
    }
  }
}
</style>
