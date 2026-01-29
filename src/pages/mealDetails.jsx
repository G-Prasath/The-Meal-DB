import { Link, useParams } from "react-router-dom";
import { fetchMealsById } from "../API/fakeStore";
import { useEffect, useState } from "react";
import loadingSpinner from "../components/loadingSpinner.jsx";
import { useFavorites } from "../context/favContext.jsx";
import FavButton from "../components/favButton.jsx";

const mealDetails = () => {
  const { mealId } = useParams();
  const [mealDetails, setMealDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toggle, isFavorite } = useFavorites();

  useEffect(() => {
    fetchMealsById(mealId)
      .then((res) => setMealDetails(res.data.meals?.[0] || null))
      .catch((err) => console.log("Meal details fetch error: " + err))
      .finally(() => setLoading(false));
  }, [mealId]);

  if (loading) return <div>{loadingSpinner()}</div>;

  if (!mealDetails)
    return (
      <p className="flex w-full justify-center text-gray-400">Meal not found</p>
    );

  const ingredients = [];
  for (let i = 0; i <= 20; i++) {
    const ing = mealDetails[`strIngredient${i}`];
    const measure = mealDetails[`strMeasure${i}`];
    if (ing?.trim()) ingredients.push(`${ing} - ${measure}`);
  }

  console.log(mealDetails);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl text-emerald-700 font-semibold">
        {mealDetails.strMeal}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
        <div className="relative">
          <FavButton
            meal={mealDetails}
            onToggle={toggle}
            isFav={isFavorite(mealDetails)}
          />
          <img
            src={mealDetails.strMealThumb}
            alt={mealDetails.strMeal}
            className="w-full rounded shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <div className="flex gap-4 text-sm">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              {mealDetails.strArea}
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">
              {mealDetails.strCategory}
            </span>
          </div>
          <h2 className="text-md text-emerald-800 font-semibold">
            Ingredients
          </h2>
          <ul className="space-y-4">
            {ingredients.map((ing, idx) => (
              <li key={idx} className="list-disc list-inside text-gray-600">
                {ing}
              </li>
            ))}
          </ul>

          {mealDetails.strYoutube && (
            <Link
              to={mealDetails.strYoutube}
              target="_blank"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 inline-block"
            >
              Watch on YouTube
            </Link>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-green-600 text-2xl font-semibold">Instructions</h2>
        <div>
          <p className="leading-loose text-gray-500 text-justify">{mealDetails.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default mealDetails;
