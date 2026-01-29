import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import {searchMealsByName} from '../API/fakeStore.js';
import LoadingSpinner from '../components/loadingSpinner.jsx';
import MealCard from '../components/mealCard.jsx';

const searchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || "";
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!query){
      setMeals([]);
      setLoading(false);
      return;
    }
    searchMealsByName(query)
    .then((res) => setMeals(res.data.meals || []))
    .catch((err) => console.log("This Search query Fetching error : ", err))
    .finally(() => setLoading(false));
  }, [query]);
  
  if(loading) return <LoadingSpinner />;
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-xl font-semibold text-gray-500">Search Result for "{query}"</h1>
      {meals.length === 0 ? (
        <p className="mt-6 text-gray-600">No meals found for "{query}". Please try a different search term.</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  )
}

export default searchResult
