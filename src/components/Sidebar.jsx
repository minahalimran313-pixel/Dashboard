import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '⚏' },
    { name: 'Users', path: '/users', icon: '👥' },
    { name: 'Products', path: '/products', icon: '📦' },
    { name: 'Analytics', path: '/analytics', icon: '📊' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <div className="w-full md:w-64 bg-[#232324] text-gray-400 p-4 sm:p-6 flex flex-col md:flex-col gap-4 md:gap-6 rounded-2xl md:rounded-3xl shadow-xl border border-[#2a2a2b]">
      
      {/* Brand logo container - hidden or adjusted on mobile layout */}
      <div className="flex items-center gap-3 px-2 py-2 md:py-4 border-b border-[#2d2d2f]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-500 shadow-md flex items-center justify-center text-white font-bold text-xs shrink-0">C</div>
        <span className="font-bold text-white text-sm sm:text-base truncate">Ecommerce Dashboard</span>
      </div>
      
      {/* Navigation menu: Horizontal scroll row on mobile, vertical stack on desktop */}
      <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-none">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 md:gap-4 px-3 md:px-4 py-2.5 md:py-3 rounded-xl transition-all duration-300 text-left shrink-0 md:shrink-grow w-auto md:w-full ${
                isActive 
                  ? 'bg-[#2d2d2f] text-white border-b-2 md:border-b-0 md:border-l-4 border-cyan-400' 
                  : 'hover:bg-[#282829] hover:text-gray-200'
              }`
            }
          >
            <span className="text-base">{item.icon}</span>
            <span className="text-xs sm:text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

    </div>
  );
};

export default Sidebar;