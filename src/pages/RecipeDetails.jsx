import { useEffect, useState } from "react";

const RecipeDetails = ({ meal, onBack }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
      const data = await res.json();
      setDetails(data.meals[0]);
    };
    fetchDetails();
  }, [meal]);

  if (!details) return <p className="text-center mt-8">Loading recipe details...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mb-6"
      >
        ← Back
      </button>
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">{details.strMeal}</h2>
        <img
          src={details.strMealThumb}
          alt={details.strMeal}
          className="w-full rounded mb-4"
        />
        <p className="mb-4"><strong>Category:</strong> {details.strCategory}</p>
        <p className="mb-4"><strong>Area:</strong> {details.strArea}</p>
        <h3 className="font-semibold mb-2">Instructions:</h3>
        <p className="text-gray-700 whitespace-pre-line">{details.strInstructions}</p>
        <a
          href={details.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-orange-600 hover:underline"
        >
          ▶ Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default RecipeDetails;
