const RecipeCard = ({ meal, onView }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg mb-2">{meal.strMeal}</h3>
        <button
          onClick={() => onView(meal)}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
