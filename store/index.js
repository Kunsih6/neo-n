export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('layout/fetch')
  },
}
