import React from "react";

const CenterBowl: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] mt-4 lg:mt-0">

      {/* Button Row */}
      <div className="flex gap-3 mb-6 items-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Salaatti</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">Rahka</button>
        <div className="flex gap-2">
          {/* Icons placeholder */}
          <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
          <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
        </div>
      </div>

      {/* Big Bowl */}
      <div className="w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 flex items-center justify-center shadow-inner relative">
        
        <span className="text-gray-400">Bowl</span>
      </div>

      {/* Bottom Info */}
      <div className="mt-4 flex flex-col items-center gap-1 text-gray-700">
        <span>100 g / 1,99 €</span>
        <span>500 ml</span>
      </div>

    </div>
  );
};

export default CenterBowl;