<template>
  <main class="home">
    <HomeHero :blok="hero" />
    <template v-for="section in sections">
      <UtilPageDivider :key="section._uid + 'divider'" />
      <HomeSection
        :key="section._uid"
        :section="section"
        class="home__section"
      />
    </template>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  async fetch() {
    await this.$store.dispatch('home/fetch')
  },
  head() {
    return {
      title: 'Kunsih',
    }
  },
  computed: {
    ...mapGetters({
      hero: 'home/getHero',
      sections: 'home/getSections',
      homeStoryId: 'home/getStoryId',
      layoutStoryId: 'layout/getStoryId',
    }),
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], this.storyblokEvent)
  },
  methods: {
    storyblokEvent(event) {
      event.stopPropagation()
      event.preventDefault()
      if (event.action === 'input') {
        if (event.story.id === this.layoutStoryId) {
          this.$store.dispatch('layout/updateStoryContent', event.story.content)
        } else if (event.story.id === this.homeStoryId) {
          this.$store.dispatch('home/updateStoryContent', event.story.content)
        }
      } else {
        // Reload page
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      }
    },
  },
}
</script>
<style lang="postcss" scoped>
.home {
  &__section {
    @apply py-32;
  }
}
</style>
