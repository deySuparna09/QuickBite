import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import RecipeCard from "../components/RecipeCard";

const Home = ({ onSelectMeal, favorites, toggleFavorite }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // search by ingredient
  const handleSearch = async (ingredient) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      if (data.meals) setMeals(data.meals);
      else {
        setMeals([]);
        setError("No recipes found for that ingredient.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // random recipe
  const handleFeelingLucky = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      setMeals(data.meals);
    } catch {
      setError("Failed to fetch random recipe.");
    } finally {
      setLoading(false);
    }
  };

  // category filters
  const handleFilter = async (type) => {
    setLoading(true);
    setError("");
    try {
      let category = "Beef";
      if (type === "Healthy") category = "Vegetarian";
      if (type === "Quick") category = "Seafood";
      if (type === "Comfort") category = "Pasta";

      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await res.json();
      if (data.meals) setMeals(data.meals);
      else setError("No meals found for that category.");
    } catch {
      setError("Error fetching category meals.");
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

      <SearchBar onSearch={handleSearch} onLucky={handleFeelingLucky} />
      <FilterBar onFilter={handleFilter} />

      {loading && <p className="text-center mt-4">Loading recipes...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-8">
        {meals.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            meal={meal}
            onView={onSelectMeal}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        ))}
      </div>

      {favorites.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            ❤️ Your Favorites
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {favorites.map((meal) => (
              <RecipeCard
                key={meal.idMeal}
                meal={meal}
                onView={onSelectMeal}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

