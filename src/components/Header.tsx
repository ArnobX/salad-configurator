import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <header className="bg-zinc-800 text-white w-full h-32 flex justify-between items-start px-8 pt-4">
            
            {/* Logo */}
            <Link to="/" className="w-24 h-24 rounded-full border-4 border-[#A2D135] flex items-center justify-center flex-col -mt-2 bg-zinc-800 shadow-lg">
                <span>Fresh Food Factory</span>
                <span>FRESSE</span>
            </Link>

            {/* Title */}
            <h1 className="text-3xl font-black tracking-widest mt-6">BOWL-LASKURI</h1>

            {/* Right Side */}
            <div className="relative">
                
                {/* Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white text-3xl"
                >
                    ☰
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 bg-[#A2D135] text-black rounded-b-3xl rounded-t-xl px-6 py-4 flex flex-col gap-2 min-w-[200px] shadow-md">
                        <Link 
                            to="/community" 
                            className="font-bold hover:underline hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Saved recipes
                        </Link>
                        
                    </div>
                )}
            </div>

        </header>
    )
}