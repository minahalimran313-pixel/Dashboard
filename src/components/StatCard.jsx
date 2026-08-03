import React from 'react';

const StatCard = ({ title, children }) => {
  return (
    <div className="w-full min-w-0 bg-[#232324] rounded-2xl p-4 sm:p-5 shadow-lg border border-[#2a2a2b] flex flex-col gap-4">
      <h3 className="text-white font-semibold text-xs sm:text-sm tracking-wide border-b border-[#2d2d2f] pb-2 truncate">
        {title}
      </h3>
      <div className="w-full flex-1 min-h-[140px] flex items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default StatCard;