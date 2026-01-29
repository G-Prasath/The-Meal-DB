import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import loadingSpinner from "../components/loadingSpinner";
import { fetchMealsByCategory } from "../API/fakeStore";

const categories = () => {
  const { categories } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMealsByCategory(categories)
      .then((res) => setMeals(res.data.meals))
      .catch((err) => console.log("Meals by category fetch error: " + err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return loadingSpinner();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-semibold capitalize mb-6 text-emerald-800">
        {categories} Meals
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {meals.map((meal) => (
          <Link
            to={`/meal/${meal.idMeal}`}
            key={meal.idMeal}
            className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2 className="text-center my-2 font-semibold text-md text-emerald-700">
              {meal.strMeal}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default categories;
