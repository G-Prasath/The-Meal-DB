import { createContext, useContext, useEffect, useState } from "react";

const FavContext = createContext();
const STORAGE_KEY = "mealdb_favorites";

// load favorites from local storage
const loadFavoritesFromLocalStorage = () => {
  try {
    const existingFavorites = localStorage.getItem(STORAGE_KEY);
    return existingFavorites ? JSON.parse(existingFavorites) : [];
  } catch (error) {
    console.log("Failed to parse Favorites from local");
    return [];
  }
};

export const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(loadFavoritesFromLocalStorage);

  // save favorites to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.log("Failed to save Fav : ", error);
    }
  }, [favorites]);

  // toggle favorite meal
  const toggle = (meal) => {
    setFavorites((prev) => {
      const existing = prev.some((m) => m.idMeal === meal.idMeal);
      return existing
        ? prev.filter((m) => m.idMeal !== meal.idMeal)
        : [...prev, meal];
    });
  };

  // check if meal is favorite
  const isFavorite = (meal) => {
    return favorites.some((m) => m.idMeal === meal.idMeal);
  };

  return (
    <FavContext.Provider value={{ favorites, toggle, isFavorite }}>
      {children}
    </FavContext.Provider>
  );
};


export const useFavorites = () => {
    const context = useContext(FavContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavProvider");
    }
    return context;
}