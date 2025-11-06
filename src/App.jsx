import { useState, useEffect } from "react";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // load favorites from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  // sync favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (meal) => {
    setFavorites((prev) => {
      const exists = prev.find((m) => m.idMeal === meal.idMeal);
      if (exists) return prev.filter((m) => m.idMeal !== meal.idMeal);
      return [...prev, meal];
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-white text-gray-800">
      {!selectedMeal ? (
        <Home
          onSelectMeal={setSelectedMeal}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <RecipeDetails
          meal={selectedMeal}
          onBack={() => setSelectedMeal(null)}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}
    </div>
  );
}

export default App;
