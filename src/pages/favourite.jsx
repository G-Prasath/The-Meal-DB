import { useFavorites } from "../context/favContext.jsx";
import { Heart } from "lucide-react";
import MealCard from "../components/mealCard.jsx";
import { Link } from "react-router-dom";


const favourite = () => {
  const { favorites } = useFavorites();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold capitalize mb-6 text-emerald-800 flex items-center gap-2">
        <span className="text-red-500 ">
          <Heart fill="currentColor" />
        </span>
        Favourite Meals
      </h1>

      {favorites.length === 0 && (
        <p className="text-gray-500">You have no favourite meals yet. <Link to="/" className="text-blue-400 underline ">Explore Meals</Link></p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {favorites.map((fav) => (
          <MealCard meal={fav} key={fav.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default favourite;
