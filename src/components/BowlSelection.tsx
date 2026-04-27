import type { Bowl } from '../types';
import { useIngredientStore } from '../store/useIngredientStore';

interface Props{
    bowls: Bowl[];
}

export default function BowlSelection({bowls}: Props) {

    const setBowl = useIngredientStore((state) => state.setBowl);

    return(
        <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">
            
            <span className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
                1
            </span>

            {bowls.map((bowl) =>(
                <button
                    key={bowl.id}
                    onClick={() => setBowl(bowl)}   
                    className="h-12 border-2 border-gray-600 rounded-xl flex items-center px-4 w-full hover:bg-gray-700 transition"
                >
                    {bowl.name}
                </button>
            ))}
        
        </div>
    );
}