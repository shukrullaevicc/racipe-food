import { Routes, Route } from "react-router-dom";
import Admin from "./admin/Admin";
import Recipes from "../routes/recipes/Recipes";
import Favorites from "../routes/favorites/Favorites";
import SinglePage from "../routes/single-page/SinglePage";

const RouteController = () => {
  return (
    <Routes>
      <Route path="" element={<Admin />}>
        <Route path="recipes" element={<Recipes />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="single-page/:recipeId" element={<SinglePage />}/>
      </Route>
    </Routes>
  )
}

export default RouteController