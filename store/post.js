export const state = () => ({
  post: undefined,
})

export const mutations = {
  SET_POST(state, post) {
    state.post = post
  },
}

export const actions = {
  async GET_POST({ commit }, { slug } = {}) {
    const post = await this.$api.post.get({ slug })
    commit('SET_POST', post)
    return post
  },
}
