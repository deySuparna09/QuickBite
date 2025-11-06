const RecipeCard = ({ meal, onView, toggleFavorite, favorites }) => {
  const isFav = favorites.some((m) => m.idMeal === meal.idMeal);

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-40">
        <h3 className="font-semibold text-lg">{meal.strMeal}</h3>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={() => onView(meal)}
            className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
          >
            View
          </button>
          <button
            onClick={() => toggleFavorite(meal)}
            className={`px-3 py-1 rounded ${
              isFav
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {isFav ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
