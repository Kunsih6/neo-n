<template>
  <div
    class="container mx-auto min-h-screen py-24 flex flex-col justify-center items-center"
  >
    <div v-if="authenticated">
      <!-- eslint-disable-next-line -->
      <div v-html="$storyapi.richTextResolver.render(content.content)" />
      <UtilActionButton class="mt-16">
        <NuxtLink :to="localePath({ name: 'index' })">
          {{ $t('action.backToHome') }}
        </NuxtLink>
      </UtilActionButton>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  asyncData({ isDev }) {
    return {
      isDev,
    }
  },
  data() {
    return {
      authenticated: false,
      content: {},
    }
  },
  async mounted() {
    const version =
      this.$route.query._storyblok || this.isDev ? 'draft' : 'published'

    const lang =
      this.$i18n.defaultLocale === this.$i18n.locale
        ? ''
        : `${this.$i18n.locale}/`

    const {
      data: {
        story: { content },
      },
    } = await this.$storyapi.get(`cdn/stories/${lang}easter`, {
      version,
    })

    this.content = content
    this.authenticated = true

    // const options = content.key.split(', ').map((el) => el.trim())
    // const username = prompt('Cómo te llaman?')
    // if (options.includes(username)) {
    //   this.authenticated = true
    // } else {
    //   this.$router.replace(this.localePath({ name: 'index' }))
    // }
  },
}
</script>
