<template>
  <div v-editable="blok" class="story-featured-techs">
    <div class="story-featured-techs__container">
      <StoryExternalLink
        v-for="tech in blok.list"
        :key="tech._uid"
        :blok="tech"
        no-decorator
      >
        <UtilIcon class="story-featured-techs__icon" :name="tech.name" />
      </StoryExternalLink>
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
.story-featured-techs {
  &__container {
    @apply container mx-auto grid grid-cols-5 gap-16 items-center justify-center max-w-4xl;
  }

  &__icon {
    @apply h-auto w-full;
  }
}
</style>
