import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './SinglePage.css';

const SinglePage = () => {
  const { recipeId } = useParams();
  const recipe = useSelector(state => state.favoriteRecipes.find(r => r.id === parseInt(recipeId)));

  if (!recipe) {
    return <div className="recipe-not-found">Recipe not found!</div>;
  }

  return (
    <div className="recipe-details">
      <h1 className="recipe-title">{recipe.name}</h1>
      <div className="recipe-meta">
        <p><i className="fas fa-clock"></i> {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</p>
        <p><i className="fas fa-user"></i> {recipe.servings} person</p>
      </div>
      <img src={recipe.image} alt={recipe.name} className="recipe-detail-image" />
      <div className="recipe-content">
        <div className="recipe-procedure">
          <h2>Procedure</h2>
          <ol className="instructions-list">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="instruction-item">{step}</li>
            ))}
          </ol>
        </div>
        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;