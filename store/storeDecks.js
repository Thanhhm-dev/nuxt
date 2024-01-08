export const state = () => ({
  decks: []
})

export const mutations = {
  setDecks(state, decks) {
    state.decks = decks
  },
  editDeck(state, deckEdit) {
    const deckId = state.decks.findIndex(deck => deck.id === deckEdit.id)
    state.decks[deckId] = deckEdit
  }
}

export const actions = {
  setDecks({commit}, deck) {
    commit('setDecks', deck)
  },
  editDeck({state, commit}, deck) {
    commit('editDeck', deck)
  }
}

export const getters = {
  decks(state) {
    return state.decks
  }
}
