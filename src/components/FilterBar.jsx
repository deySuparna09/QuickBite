const FilterBar = ({ onFilter }) => {
  const moods = ["Comfort", "Quick", "Healthy"];

  return (
    <div className="flex justify-center gap-4 mt-6">
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onFilter(mood)}
          className="bg-orange-200 text-orange-700 px-4 py-2 rounded-full hover:bg-orange-300"
        >
          {mood}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
