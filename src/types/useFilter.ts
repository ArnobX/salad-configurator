import { useState } from "react";
import type { Category, Ingredient } from "./index";

export const useFilter = (
  categories: Category[],
  ingredients: Ingredient[]
) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const filteredCategories = categories.filter(
    (category) => category.id !== 6
  );

  const filteredIngredients = ingredients.filter((ingredient) => {
    if (activeCategory === null) return ingredient.categoryId !== 6;
    return ingredient.categoryId === activeCategory;
  });

  const selectCategory = (id: number) => {
    setActiveCategory(id);
  };

  return {
    filteredCategories,
    filteredIngredients,
    activeCategory,
    selectCategory,
  };
};