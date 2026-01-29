import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Categories from "./pages/categories.jsx";
import Favourite from "./pages/favourite.jsx";
import MealDetails from "./pages/mealDetails.jsx";
import Header from "./components/header.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categories" element={<Categories />} />
        <Route path="/favourite" element={<Favourite />} />  
        <Route path="/meal/:mealId" element={<MealDetails />} />      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
