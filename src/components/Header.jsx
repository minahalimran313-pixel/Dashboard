import React from 'react';

const Header = ({ title, description }) => {
  return (
    <div className="bg-[#232324] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 justify-between sm:items-center shadow-md border border-[#2a2a2b] mb-6">
      <div className="min-w-0">
        <h1 className="text-white font-bold text-base sm:text-lg uppercase tracking-wider truncate">{title}</h1>
        <p className="text-gray-400 text-xs mt-0.5 sm:mt-1 break-words">{description}</p>
      </div>
      
      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 border-t sm:border-t-0 border-[#2d2d2f] pt-3 sm:pt-0 w-full sm:w-auto">
        <button className="relative text-gray-400 hover:text-white transition-colors p-1 text-lg">
          🔔
          <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3 border-l border-gray-700 pl-4 sm:pl-6 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0">
            M
          </div>
          <div className="flex items-center gap-1 min-w-0">
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors truncate">Admin</span>
            <span className="text-[10px] text-gray-500 group-hover:text-white transition-colors shrink-0">▼</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;