<template>
  <div v-editable="blok" class="story-featured-projects">
    <div class="story-featured-projects__list">
      <div
        v-for="(item, i) in blok.projects"
        :key="item._uid"
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
        :src="blok.projects[selected].image.filename"
        alt="preview"
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
  &__icon {
    @apply h-auto w-full;
  }
  &__list {
    @apply grid grid-cols-1 gap-6;
  }

  &__item {
    @apply bg-gradient-to-r from-primary via-primary-dark to-secondary
    py-4 px-10 transition-all duration-150 cursor-pointer text-xl;

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
  }

  &__preview {
    @apply mt-8 w-full max-w-2xl mx-auto;

    img {
      @apply w-full;
    }
  }
}

@screen lg {
  .story-featured-projects {
    &__list {
      @apply grid-cols-3;
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
</style>
