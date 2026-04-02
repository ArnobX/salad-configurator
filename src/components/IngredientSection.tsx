import IngredientCard from "./IngredientCard";
import type { Ingredient, Category } from "../types";

interface Props {
  categories: Category[];
  ingredients: Ingredient[];
}

export default function IngredientSection({ categories, ingredients }: Props) {
  const filteredCategories = categories.filter((cat) => cat.id !== 6);
  const filteredIngredients = ingredients.filter((item) => item.categoryId !== 6);

  return (
    <div>
      {/* 🔘 Category Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filteredCategories.map((cat) => (
          <button
            key={cat.id}
            className="px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition"
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* 🧱 Ingredient Grid */}
      <div className="flex flex-wrap gap-4">
        {filteredIngredients.map((item) => (
          <IngredientCard key={item.id} ingredient={item} />
        ))}
      </div>
    </div>
  );
}