import type { Ingredient } from "../types";

interface Props {
  ingredient: Ingredient;
}

const dietLabels: Record<"G" | "L" | "V", string> = {
  G: "Gluten-Free",
  L: "Lactose-Free",
  V: "Vegan",
};

const dietColors: Record<"G" | "L" | "V", string> = {
  G: "#4CAF50",
  L: "#4CAF50",
  V: "#4CAF50",
};

export default function IngredientCard({ ingredient }: Props) {
  return (
    <div className="w-40 h-40 rounded-3xl border border-zinc-200 bg-white p-4 flex flex-col justify-between shadow-sm transition-transform duration-150 hover:-translate-y-1 hover:shadow-md">
      <div className="flex-1 flex items-center justify-center">
        <h3 className="text-base font-semibold text-zinc-900 text-center">{ingredient.name}</h3>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {ingredient.diets
          .filter((diet): diet is keyof typeof dietLabels => diet in dietLabels)
          .map((diet) => (
            <span
              key={diet}
              className="rounded-full px-2 py-1 text-[11px] font-semibold text-white"
              style={{ backgroundColor: dietColors[diet] }}
            >
              {dietLabels[diet]}
            </span>
          ))}
      </div>
    </div>
  );
}
