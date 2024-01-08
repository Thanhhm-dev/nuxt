export const state = () => ({
  decks: []
})

export const mutations = {
  setDecks(state, decks) {
    state.decks = decks
  }
}

export const actions = {
  setDecks({commit}, decks)  {
    commit('setDecks', decks)
  }
}

export const getters = {
  decks(state) {
    return state.decks
  }
}
