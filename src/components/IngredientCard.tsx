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
  L: "#FFC107",
  V: "#2196F3",
};

export default function IngredientCard({ ingredient }: Props) {
  return (
    <div className="w-36 rounded-3xl border border-zinc-200 bg-white p-3 flex flex-col justify-between shadow-sm transition-transform duration-150 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-12 w-12 rounded-2xl bg-zinc-100 overflow-hidden flex items-center justify-center shrink-0">
          {ingredient.image_url ? (
            <img
              src={ingredient.image_url}
              alt={ingredient.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-[10px] text-zinc-400">No image</span>
          )}
        </div>

        <h3 className="text-sm font-semibold text-zinc-900 leading-tight">{ingredient.name}</h3>
      </div>

      <div className="mt-2 flex flex-wrap gap-1 justify-center">
        {ingredient.diets
          .filter((diet): diet is keyof typeof dietLabels => diet in dietLabels)
          .map((diet) => (
            <span
              key={diet}
              className="rounded-full px-2 py-1 text-[10px] font-semibold text-white"
              style={{ backgroundColor: dietColors[diet] }}
            >
              {dietLabels[diet]}
            </span>
          ))}
      </div>
    </div>
  );
}