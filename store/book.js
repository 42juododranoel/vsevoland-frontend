export const state = () => ({
  book: undefined,
})

export const mutations = {
  SET_BOOK(state, book) {
    state.book = book
  },
}

export const actions = {
  async GET_BOOK({ commit }, { slug } = {}) {
    const book = await this.$api.book.get({ slug })
    commit('SET_BOOK', book)
    return book
  },
}
