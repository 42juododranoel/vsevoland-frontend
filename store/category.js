const DEFAULT_CATEGORY = {
  name: 'Всеволод Скрипник',
  emoji: '💪(ФωФ💪',
}

export const state = () => ({
  category: DEFAULT_CATEGORY,
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
  async RESET_CATEGORY({ commit }) {
    const category = DEFAULT_CATEGORY
    commit('SET_CATEGORY', category)
    return category
  },
}
