import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchCategories = () => axios.get(`${BASE_URL}/categories.php`);
export const fetchMealsByCategory = (cat) => axios.get(`${BASE_URL}/filter.php?c=${cat}`);
export const fetchMealsById = (id) => axios.get(`${BASE_URL}/lookup.php?i=${id}`);
export const searchMealsByName = (query) => axios.get(`${BASE_URL}/search.php?s=${query}`);