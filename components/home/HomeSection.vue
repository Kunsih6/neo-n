<template>
  <section v-if="section" :id="section.id" class="section">
    <div class="section__container">
      <component
        :is="getComponentName(c.component)"
        v-for="c in section.content"
        :key="c._uid"
        :blok="c"
        class="section__content"
        use-label
      />
    </div>
  </section>
</template>

<script>
import StoryExternalLink from '~/components/storyblok/StoryExternalLink'
import StoryFeaturedProjects from '~/components/storyblok/StoryFeaturedProjects'
import StoryFeaturedTechs from '~/components/storyblok/StoryFeaturedTechs'
import StoryRichText from '~/components/storyblok/StoryRichText'

export default {
  components: {
    StoryExternalLink,
    StoryFeaturedProjects,
    StoryFeaturedTechs,
    StoryRichText,
  },
  props: {
    section: {
      default: null,
      required: true,
      type: Object,
    },
  },
  methods: {
    getComponentName(component) {
      if (component === 'external-link') {
        return 'StoryExternalLink'
      } else if (component === 'richtext') {
        return 'StoryRichText'
      } else if (component === 'featured-techs') {
        return 'StoryFeaturedTechs'
      } else if (component === 'featured-projects') {
        return 'StoryFeaturedProjects'
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.section {
  @apply flex items-center justify-center;

  &__container {
    @apply container flex items-center justify-center mx-auto flex-col;
  }

  &__content:not(:last-child) {
    @apply mb-16;
  }
}
</style>
