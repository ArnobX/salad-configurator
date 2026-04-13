import { Link } from "react-router-dom";
import { useIngredientStore } from "./store/useIngredientStore";
export function SummaryBar() {

  const slots = useIngredientStore((state) => state.slots);

  const removeIngredientStore = useIngredientStore((state) => state.removeIngredient);

  const activeIngredients = Object.values(slots).filter((item): item is NonNullable<typeof item> => item !== null);
  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full flex flex-col md:flex-row gap-8 shadow-xl">

       
      <div className="flex-1 bg-[#3a3a3a] rounded-3xl p-6 min-h-[150px] shadow-inner">
        <h3 className="font-bold text-lg mb-4">Selected ingredients</h3>

        {activeIngredients.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {activeIngredients.map((item) => (
              <div 
              key={item.id}
              className="flex items-center gap-2 bg-zinc-700 px-3 py-2 rounded-full">
                <span>{item.name}</span>
                <button
                onClick={() => removeIngredientStore(item.id)}
                className="text-white font-bold">
                  x
                </button>
                </div>
            ))}
            </div>
        ) : (
        <p className="text-gray-400">No ingredients selected yet</p>
        )}
      </div>

      
      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        
        <h3 className="font-bold text-lg">Total
          ({activeIngredients.length})
        </h3>

        
        <div>
          <p className="text-gray-400 text-center mb-1">Weight</p>
          <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full shadow-md text-center">
            0 g
          </div>
        </div>

      
        <div>
          <p className="text-gray-400 text-center mb-1">Price</p>
          <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full shadow-md text-center">
            0,00 €
          </div>
        </div>
<Link to="/print">Print</Link>
      </div>
    </div>
  );
}