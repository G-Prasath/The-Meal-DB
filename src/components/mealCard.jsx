import React from "react";
import { Link } from "react-router-dom";
import FavButton from "./favButton.jsx";

const mealCard = ({ meal }) => {
  return (
    <div className="relative p-4 rounded-b-lg shadow-xl bg-gray-100/40 hover:shadow-2xl transition-all" title={meal.strMeal}>
      <FavButton  />
      <Link
        to={`/meal/${meal.idMeal}`}
        key={meal.idMeal}
      >
        <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg" />
        <h2 className="text-center my-2 font-semibold text-md text-emerald-700 truncate">
          {meal.strMeal}
        </h2>
      </Link>
    </div>
  );
};

export default mealCard;
