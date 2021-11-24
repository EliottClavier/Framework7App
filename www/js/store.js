

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
    addRecipe({ state }, recipe) {
      state.recipes = [...state.recipes, recipe];
    }
  },
})

