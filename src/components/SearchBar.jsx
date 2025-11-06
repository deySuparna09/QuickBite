import { useState } from "react";

const SearchBar = ({ onSearch, onLucky }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter an ingredient (e.g., chicken)"
          className="border border-orange-300 rounded-l-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 rounded-r-lg hover:bg-orange-600"
        >
          Search
        </button>
      </form>

      <button
        onClick={onLucky}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
      >
        🎲 Feeling Lucky
      </button>
    </div>
  );
};

export default SearchBar;
