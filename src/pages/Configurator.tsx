import React, { useEffect, useState } from 'react';
import   BowlSelection  from "../components/BowlSelection";
import   CenterBowl  from "../components/CenterBowl";  
import { BaseSelection } from "../components/BaseSelection";
import   IngredientSection  from "../components/IngredientSection";
import { SummaryBar } from "../components/SummaryBar";
import type { Bowl, Category, Ingredient } from "../types";
import { getBowls, getCategories } from "../services/api";

export default function Configurator() {
  const [bowls, setBowls] = useState<Bowl[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  
  
  useEffect(() => {
    async function loadData() {
      try {
  setIsLoading(true);

        const data = await getBowls();
        setBowls(data);
     
     const categoriesData = await getCategories();
        setCategories(categoriesData);
    
      } catch (error) {
        console.error("Failed to load bowls", error);
        setError("Failed to load data");
      }finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);


    if (isLoading) return <p className="">Loading...</p>;
    if (error) return <p className="">{error}</p>;

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
