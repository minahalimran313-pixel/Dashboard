import React from 'react';

const ActivityItem = ({ user, action, time, initial }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#282829] hover:bg-[#2d2d2f] transition-all border border-[#2e2e30] gap-3 sm:gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-xs text-white font-bold shadow-md">
          {initial}
        </div>
        <div className="min-w-0">
          <p className="text-white text-xs font-semibold truncate">{user}</p>
          <p className="text-gray-400 text-[10px] mt-0.5 break-words line-clamp-2 sm:line-clamp-1">{action}</p>
        </div>
      </div>
      <span className="self-start sm:self-auto text-gray-500 text-[10px] font-medium bg-[#1d1d1e] px-2 py-1 rounded-md shrink-0 whitespace-nowrap">
        {time}
      </span>
    </div>
  );
};

export default ActivityItem;