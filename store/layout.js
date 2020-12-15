export const state = () => ({
  story: { content: {} },
})

export const getters = {
  getFooter(state) {
    return state.story.content.footer[0]
  },
  getNavbar(state) {
    return state.story.content.navbar[0]
  },
  getStoryId(state) {
    return state.story.id
  },
}

export const mutations = {
  SET_STORY(state, story) {
    state.story = story
  },
  SET_STORY_CONTENT(state, content) {
    state.story.content = content
  },
}

export const actions = {
  async fetch({ commit }) {
    const version =
      this.app.context.query._storyblok || this.app.context.isDev
        ? 'draft'
        : 'published'

    const lang =
      this.$i18n.defaultLocale === this.$i18n.locale
        ? ''
        : `${this.$i18n.locale}/`

    const { data } = await this.app.$storyapi.get(`cdn/stories/${lang}layout`, {
      version,
    })

    commit('SET_STORY', data.story)
  },
  updateStoryContent({ commit }, content) {
    commit('SET_STORY_CONTENT', content)
  },
}
