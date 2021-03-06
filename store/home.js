import getMetatags from '~/usables/getMetatags'

export const state = () => ({
  story: { content: {} },
})

export const getters = {
  getMetatags(state) {
    return getMetatags(state.story.content)
  },
  getHero(state) {
    return state.story.content.hero && state.story.content.hero.length > 0
      ? state.story.content.hero[0]
      : null
  },
  getSections(state) {
    return state.story.content.sections
  },
  getStoryId(state) {
    return state.story.id
  },
  getTitle(state) {
    return state.story.content.title || ''
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

    const { data } = await this.app.$storyapi.get(`cdn/stories/${lang}home`, {
      version,
    })

    commit('SET_STORY', data.story)
  },
  updateStoryContent({ commit }, content) {
    commit('SET_STORY_CONTENT', content)
  },
}
