import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

const Home = ({ onSelectMeal }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (ingredient) => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await res.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
        setError("No recipes found for that ingredient.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-600">
        🍳 QuickBite
      </h1>

      <p className="text-center text-gray-600 mb-6">
        Find recipes by entering an ingredient you have!
      </p>
      
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center mt-4">Loading recipes...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-8">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} onView={onSelectMeal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
