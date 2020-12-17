<template>
  <div v-editable="blok" class="story-featured-projects">
    <div class="story-featured-projects__list">
      <div
        v-for="(item, i) in blok.projects"
        :key="item._uid"
        :class="{ 'story-featured-projects__item--active': i === selected }"
        class="story-featured-projects__item"
        @click="selected = i"
      >
        {{ item.name }}
      </div>
    </div>
    <figure
      v-if="blok.projects[selected].image.filename"
      class="story-featured-projects__preview"
    >
      <img
        v-for="(p, i) in blok.projects"
        :key="p._uid + 'img'"
        :class="{
          'story-featured-projects__preview-img--active': i === selected,
        }"
        :src="p.image.filename"
        alt="preview"
        class="story-featured-projects__preview-img"
        loading="lazy"
      />
    </figure>
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
  data() {
    return {
      selected: 0,
    }
  },
}
</script>
<style lang="postcss" scoped>
.story-featured-projects {
  @apply w-full;

  &__icon {
    @apply h-auto w-full;
  }
  &__list {
    @apply grid grid-cols-1 gap-6 w-10/12 mx-auto;
  }

  &__item {
    @apply bg-gradient-to-r from-primary via-primary-dark to-secondary
    flex items-center justify-start py-4 px-10 transition-all duration-150 cursor-pointer text-xl;

    background-size: 200% 100%;
    background-position: 100% 0;
    clip-path: polygon(
      1.5rem 0%,
      100% 0%,
      100% calc(100% - 1rem),
      calc(100% - 1.5rem) 100%,
      0% 100%,
      0% 1rem
    );

    &--active {
      background-position: 0;
    }
  }

  &__preview {
    @apply mt-8 mx-auto pt-16/9 relative w-full;

    &::after,
    &::before {
      @apply absolute block bg-gradient-to-r from-primary-dark via-primary to-primary-dark h-4 w-full z-10 left-0;

      animation: gradientTransition 4s infinite linear forwards;
      background-size: 400% 100%;
      content: '';
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

    &::after {
      @apply top-0 transform rotate-180;
    }

    &::before {
      @apply bottom-0;
    }
  }

  &__preview-img {
    @apply -left-2/4 -top-2/4 absolute h-full object-cover opacity-0 transition-all duration-700 w-full transform translate-x-2/4 translate-y-2/4;

    &--active {
      @apply opacity-100;
    }
  }
}

@screen md {
  .story-featured-projects {
    &__list {
      @apply grid-cols-3 w-full;
    }

    &__item {
      @apply text-base w-full;
    }
  }
}

@screen lg {
  .story-featured-projects {
    @apply w-auto;

    &__list {
      @apply w-auto;
    }

    &__item {
      @apply text-base w-full;
    }
  }
}

@media (hover: hover) and (pointer: fine) {
  .story-featured-projects {
    &__item:hover {
      background-position: 0 0;
    }
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