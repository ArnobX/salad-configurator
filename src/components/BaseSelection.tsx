import type { Ingredient } from "../types";

interface BaseSelectionProps {
  ingredients: Ingredient[];
}

export function BaseSelection({ ingredients }: BaseSelectionProps) {
  const baseIngredients = ingredients.filter((ingredient) => ingredient.categoryId === 6);

  return (
    <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">
      
      
      <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
        2
      </div>

      
      <h2 className="font-bold text-lg mb-4">Valitse salaattipohja</h2>

      
      <div className="w-full flex flex-col gap-3">
        {baseIngredients.map((ingredient) => (
          <div key={ingredient.id} className="border-b border-gray-600 pb-2 flex justify-end gap-4 items-center">
            <span className="text-gray-400">{ingredient.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}