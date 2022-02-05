export const state = () => ({
  category: undefined,
})

export const mutations = {
  SET_CATEGORY(state, category) {
    state.category = category
  },
}

export const actions = {
  async GET_CATEGORY({ commit }, { slug } = {}) {
    const category = await this.$api.category.get({ slug })
    commit('SET_CATEGORY', category)
    return category
  },
}
