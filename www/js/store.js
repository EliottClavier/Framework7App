

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

      const newRecipe = (recipe) => recipe == recipe
      const already = state.recipes.findIndex(newRecipe);
      if(already != -1){
        state.recipes = state.recipes.splice(0, already);
      }else{
        state.recipes = [...state.recipes, recipe];
      }

    }
  },
})

