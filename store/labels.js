export const state = () => ({
  labels: undefined,
})

export const mutations = {
  SET_LABELS(state, labels) {
    state.labels = labels
  },
}

export const actions = {
  async GET_LABELS({ commit }, { category } = {}) {
    const labels = await this.$api.labels.get({ category })
    commit('SET_LABELS', labels)
    return labels
  },
}
