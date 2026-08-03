import React from 'react';

const Settings = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 bg-[#161617] min-h-screen text-gray-200">
      <div className="bg-[#232324] rounded-2xl p-4 sm:p-6 border border-[#2a2a2b] shadow-lg">
        
        {/* Header Block */}
        <h2 className="text-white font-semibold text-base mb-4 tracking-tight">
          Global System Settings
        </h2>
        
        {/* Settings Interactive Container */}
        <div className="flex flex-col gap-3">
          
          {/* Row 1: Maintenance Mode */}
          <label className="flex flex-row items-center justify-between p-4 bg-[#282829] rounded-xl border border-[#2e2e30] hover:border-[#38383b] transition-colors cursor-pointer group gap-4">
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-xs sm:text-sm font-semibold group-hover:text-cyan-400 transition-colors">
                Maintenance Mode
              </h4>
              <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5 leading-relaxed break-words">
                Locks API edits for non-admin tokens.
              </p>
            </div>
            {/* Interactive Form Accent Control */}
            <input 
              type="checkbox" 
              className="w-4 h-4 shrink-0 accent-cyan-400 rounded cursor-pointer bg-neutral-800 border-none transition-transform active:scale-95" 
            />
          </label>

          {/* Row 2: Webhooks Routing */}
          <div className="flex flex-row items-center justify-between p-4 bg-[#282829] rounded-xl border border-[#2e2e30] gap-4">
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-xs sm:text-sm font-semibold">
                Webhooks Routing
              </h4>
              <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5 leading-relaxed break-words">
                Stream event logs directly to main console.
              </p>
            </div>
            {/* Status Flag Badge */}
            <span className="text-[9px] sm:text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-900/30 px-2 py-1 rounded font-mono font-bold tracking-wider shrink-0 self-center">
              ACTIVE
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;