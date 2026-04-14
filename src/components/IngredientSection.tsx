import { useState, useMemo } from "react";
import type { Category, Ingredient } from "../types";
import { useFilter } from "../types/useFilter";
import IngredientCard from "./IngredientCard";

interface Props {
  categories: Category[];
  ingredients: Ingredient[];
}

export default function IngredientSection({
  categories,
  ingredients,
}: Props) {
  const [searchQuery, setSearchQuery] = useState(""); 

  const {
    filteredCategories,
    filteredIngredients: baseFilteredIngredients,
    activeCategory,
    selectCategory,
  } = useFilter(categories, ingredients);

  
  const filteredIngredients = useMemo(
    () =>
      baseFilteredIngredients.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [baseFilteredIngredients, searchQuery]
  );

  return (
    <section className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Etsi tuotteita"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded-full px-6 py-3 text-white w-64 outline-none mb-6 border border-white"
      />

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        {filteredCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => selectCategory(category.id)}
            className={`px-6 py-2 rounded-full font-bold transition
              ${
                activeCategory === category.id
                  ? "bg-green-500 text-black"
                  : "bg-[#A2D135] text-black opacity-70"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* INGREDIENT LIST */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredIngredients.length > 0 ? (
          filteredIngredients.map((ingredient) => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))
        ) : (
          <p className="text-white col-span-full text-center">
            Ei tuotteita löydy.
          </p>
        )}
      </div>
    </section>
  );
}