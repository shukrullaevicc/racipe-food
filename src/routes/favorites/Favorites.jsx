import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector((state) => state.favoriteRecipes);

  const handleRemoveFavorite = (recipeId) => {
    dispatch({ type: "REMOVE_FAVORITE_RECIPE", recipeId });
  };

  return (
    <div className="favorites-page">
      <h1>Favorite Recipes</h1>
      <div className="recipes-container">
        {favoriteRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />
            <div className="recipe-info">
              <h2>{recipe.name}</h2>
              <p>{recipe.cuisine}</p>
              <div className="recipe-meta">
                <span>
                  ⭐ {recipe.rating} ({recipe.reviewCount} Reviews)
                </span>
                <span>{recipe.prepTimeMinutes} mins</span>
              </div>
              <div className="recipe-actions">
                <Link to={`/single-page/${recipe.id}`} className="view-recipe">
                  View Recipe
                </Link>
                <button
                  onClick={() => handleRemoveFavorite(recipe.id)}
                  className="remove-recipe"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
