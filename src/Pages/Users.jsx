import React from 'react';

const Users = () => {
  const tableUsers = [
    { name: 'Zainab Naveed', email: 'zainab@example.com', role: 'Developer', status: 'Active' },
    { name: 'Eesha Farooq', email: 'eesha@example.com', role: 'UI Architect', status: 'Active' },
    { name: 'Laiba Saboor', email: 'laiba@example.com', role: 'Analyst', status: 'Pending' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-[#161617] min-h-screen text-gray-200">
      <div className="bg-[#232324] rounded-2xl p-4 sm:p-6 border border-[#2a2a2b] shadow-lg">
        
        {/* Header Block: Wraps on ultra-small screens */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-white font-semibold text-base tracking-tight">System Access Directory</h2>
            <p className="text-gray-500 text-[11px] mt-0.5">Manage and audit user access levels.</p>
          </div>
          <button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-xs px-4 py-2.5 sm:py-2 rounded-xl transition-colors text-center shadow-md shadow-cyan-500/10">
            Add User
          </button>
        </div>

        {/* 1. Mobile & Small Tablet view: Dynamic Stacked Layout */}
        <div className="md:hidden flex flex-col gap-3">
          {tableUsers.map((usr, index) => (
            <div 
              key={index} 
              className="bg-[#282829] p-4 rounded-xl border border-[#2e2e30] flex flex-col gap-3"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white text-sm font-semibold">{usr.name}</h4>
                  <p className="text-gray-500 text-xs mt-0.5">{usr.email}</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide ${
                  usr.status === 'Active' ? 'bg-emerald-950 text-emerald-400' : 'bg-amber-950 text-amber-400'
                }`}>
                  {usr.status}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#333335] text-[11px]">
                <span className="text-gray-500 uppercase font-mono">Role</span>
                <span className="text-gray-300 font-medium">{usr.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Desktop & Large Tablet view: Full Tabular Grid Display */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-400">
            <thead className="text-gray-300 uppercase font-mono border-b border-[#2d2d2f]">
              <tr>
                <th className="py-3.5 px-3">User Profile</th>
                <th className="py-3.5 px-3">Role Architecture</th>
                <th className="py-3.5 px-3">Status Flag</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2d2d2f]">
              {tableUsers.map((usr, index) => (
                <tr key={index} className="hover:bg-[#282829] transition-colors group">
                  <td className="py-3.5 px-3">
                    <div className="flex flex-col">
                      <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {usr.name}
                      </span>
                      <span className="text-gray-500 text-[11px] mt-0.5">{usr.email}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-3 text-gray-300 font-medium">{usr.role}</td>
                  <td className="py-3.5 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold inline-block ${
                      usr.status === 'Active' ? 'bg-emerald-950 text-emerald-400' : 'bg-amber-950 text-amber-400'
                    }`}>
                      {usr.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Users;