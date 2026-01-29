import React, { useEffect, useState } from "react";
import loadingSpinner from "../components/loadingSpinner.jsx";
import { fetchCategories } from "../API/fakeStore.js";
import { Link } from "react-router-dom";

const home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories()
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log("Categories fetch error: " + err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return loadingSpinner();

  return (
    <div className="max-w-6xl mx-auto p-3">
      <div>
        <div className="text-center mb-10 mt-3">
          <h1 className="text-2xl md:text-3xl font-semibold text-emerald-800 tracking-tight">
            Browse Meal Categories
          </h1>
          <p className="mt-2 text-md font-semibold text-gray-400">
            Discover delicious recipes from arround the world
          </p>
          <div className="mt-3 flex justify-center">
            <div className="h-1 w-24 bg-emerald-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div className="p-4 rounded-lg bg-gray-100">
            <Link
              to={`/category/${cat.strCategory}`}
              key={cat.idCategory}
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <img src={cat.strCategoryThumb} alt={cat.strCategory} />
              <h2 className="text-center my-2 font-semibold text-md text-emerald-700">
                {cat.strCategory}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default home;
