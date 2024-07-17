export const initialState = {
  favoriteRecipes: JSON.parse(localStorage.getItem("favoriteRecipes")) || [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FAVORITE_RECIPES":
      const newFavorites = [...state.favoriteRecipes, action.recepes];
      localStorage.setItem("favoriteRecipes", JSON.stringify(newFavorites));
      return {
        ...state,
        favoriteRecipes: newFavorites,
      };
    case "REMOVE_FAVORITE_RECIPE":
      const updatedFavorites = state.favoriteRecipes.filter(
        (recipe) => recipe.id !== action.recipeId
      );
      localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
      return {
        ...state,
        favoriteRecipes: updatedFavorites,
      };
    default:
      return state;
  }
};