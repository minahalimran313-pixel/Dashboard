import React from 'react';

const Products = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-[#161617] min-h-screen text-gray-200">
      <div className="bg-[#232324] rounded-2xl p-4 sm:p-6 border border-[#2a2a2b] shadow-lg">
        
        {/* Header Section */}
        <h2 className="text-white text-base sm:text-lg font-semibold mb-2 tracking-tight">
          Product Catalog & Logistics
        </h2>
        <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-2xl">
          Here you can view, create, and update product items in your ecommerce layout database.
        </p>
        
        {/* Responsive Grid System */}
        {/* 1 column on mobile, 2 columns on small tablets, 3 columns on desktops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Premium Plan', 'Standard Suite', 'Enterprise API'].map((prod, i) => (
            <div 
              key={i} 
              className="bg-[#282829] p-4 rounded-xl border border-[#2e2e30] flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 hover:border-gray-700 transition-colors duration-200"
            >
              {/* Badge Icon Counter */}
              <div className="w-10 h-10 shrink-0 bg-[#1a1a1b] rounded-lg flex items-center justify-center text-cyan-400 sm:mb-3 font-mono font-bold text-sm border border-[#232324]">
                0{i + 1}
              </div>
              
              {/* Text Layout Block */}
              <div>
                <h4 className="text-white text-sm font-semibold tracking-wide">{prod}</h4>
                <p className="text-[11px] text-gray-500 mt-0.5 sm:mt-1">Live active module</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;