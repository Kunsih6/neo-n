export const state = () => ({
  story: { content: {} },
})

export const getters = {
  getName(state) {
    return state.story.content.name.length > 0
      ? state.story.content.name[0]
      : null
  },
  getLinks(state) {
    return state.story.content.links
  },
  getNavbar(state) {
    return state.story.content.navbar[0]
  },
  getSections(state) {
    return state.story.content.sections
  },
  getSocials(state) {
    return state.story.content.socials
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
