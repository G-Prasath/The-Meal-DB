import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadingSpinner from "../components/loadingSpinner";
import { fetchMealsByCategory } from "../API/fakeStore";
import MealCard from "../components/mealCard.jsx";

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
      {
        meals.length === 0 && (
          <p className="text-gray-500">No meals found in this category.</p>
        )
      }
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {meals.map((meal) => (
          <MealCard meal={meal} key={meal.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default categories;
