

var createStore = Framework7.createStore;
const store = createStore({
  state: {
    recipes: [],
    lastLetter: null,
    ingredients: []
  },
  getters: {
    recipes({ state }) {
      return state.recipes;
    },
    lastLetter({state}){
      return state.lastLetter;
    },
    ingredients({ state }) {
      return state.ingredients;
    }
  },
  actions: {
    addRecipe({ state }, recipe) {
      const already = state.recipes.findIndex((u) => {
          return u.idMeal === recipe.idMeal;
      });
      if(already != -1){
        state.recipes.splice(already, 1);
      }else{
        state.recipes = [...state.recipes, recipe];
      }
    },
    putLastLetter({state}, letter){
      state.lastLetter = letter;
    },
    addIngredient({state}, ingredient) {
      let ing = [ingredient, state.ingredients.length, false];
      state.ingredients = [...state.ingredients, ing];
    },
    updateIngredient({state}, id) {
      state.ingredients[id][2] = !state.ingredients[id][2];
    },
    trash({state}){
      state.ingredients = [];
    },
    deleteIngredient({state}, id){
      state.ingredients.splice(id, 1);
    }
  },
})

