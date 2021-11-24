

var createStore = Framework7.createStore;
const store = createStore({
  state: {
    recipes: [],
    lastLetter: null,
  },
  getters: {
    recipes({ state }) {
      return state.recipes;
    },
    lastLetter({state}){
      return state.lastLetter;
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
    },
    putLastLetter({state}, letter){
      state.lastLetter = letter
    }
  },
})

