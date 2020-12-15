<template>
  <ul class="layout-nav-links">
    <li
      v-for="(section, i) in sections"
      :key="section.to + i"
      v-editable="section"
      class="layout-nav-links__link"
      @click="scrollTo(section.to)"
    >
      {{ section.label }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    sections: {
      default: () => [],
      required: true,
      type: Array,
    },
  },
  methods: {
    scrollTo(section) {
      const el = document.getElementById(section)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
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
