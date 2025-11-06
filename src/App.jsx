import { useState } from "react";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-white text-gray-800">
      {!selectedMeal ? (
        <Home onSelectMeal={setSelectedMeal} />
      ) : (
        <RecipeDetails meal={selectedMeal} onBack={() => setSelectedMeal(null)} />
      )}
    </div>
  );
}

export default App;
