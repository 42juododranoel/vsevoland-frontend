export const state = () => ({
  posts: undefined,
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
}

export const actions = {
  async GET_POSTS({ commit }, { category } = {}) {
    const posts = await this.$api.posts.get({ category })
    commit('SET_POSTS', posts)
    return posts
  },
}
