export function SummaryBar() {
  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full flex flex-col md:flex-row gap-8 shadow-xl">

       
      <div className="flex-1 bg-[#3a3a3a] rounded-3xl p-6 min-h-[150px] shadow-inner">
        <h3 className="font-bold text-lg mb-4">Selected ingredients</h3>
        
        <p className="text-gray-400">No ingredients selected yet</p>
      </div>

      
      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        
        <h3 className="font-bold text-lg">Total</h3>

        
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

      </div>
    </div>
  );
}