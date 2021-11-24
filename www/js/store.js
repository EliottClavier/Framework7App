

var createStore = Framework7.createStore;
const store = createStore({
  state: {
    recipes: []
  },
  getters: {
    products({ state }) {
      return state.recipes;
    }
  },
  actions: {
    addProduct({ state }, recipe) {
      state.recipes = [...state.recipes, recipe];
    },
  },
})

