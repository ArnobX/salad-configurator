export default function IngredientSection(){
    return(
        <section className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">
            <input
                type="text"
                placeholder="Etsi tuotteita"
                className="rounded-full px-6 py-3 text-black outline-none w-64 border-2 border-transparent focus:border-[#A2D135]"
            />
            <div className="flex gap-4 mt-6">
                <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Tuoreet salaatit</span>
                <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Hedelmat</span>
                <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Proteiinit</span>
                <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Ruokaisat komponentit</span>
                <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">Juustot & lisukkeet</span>
            </div>
    </section>
    );
}