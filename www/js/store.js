

var createStore = Framework7.createStore;
const store = createStore({
  state: {
    recipes: []
  },
  getters: {
    recipes({ state }) {
      return state.recipes;
    }
  },
  actions: {
    addProduct({ state }, recipe) {
      state.recipes = [...state.recipes, recipe];
    }
  },
})

