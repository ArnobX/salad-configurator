import React, { useState } from 'react';
import   BowlSelection  from "../components/BowlSelection";
import   CenterBowl  from "../components/CenterBowl";  
import { BaseSelection } from "../components/BaseSelection";
import   IngredientSection  from "../components/IngredientSection";
import { SummaryBar } from "../components/SummaryBar";
import type { Bowl, Category, Ingredient } from "../types";

export default function Configurator() {
  const [bowls, setBowls] = useState<Bowl[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  return (
    <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col gap-8 mt-4">
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch">
        <BowlSelection />
        <CenterBowl />
        <BaseSelection />
      </div>
      <IngredientSection />
      <SummaryBar />
    </main>
  );
}
