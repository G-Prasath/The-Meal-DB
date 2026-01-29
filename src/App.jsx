import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Categories from "./pages/categories.jsx";
import Favourite from "./pages/favourite.jsx";
import Header from "./components/header.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:cat" element={<Categories />} />
        <Route path="/favourite" element={<Favourite />} />        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
