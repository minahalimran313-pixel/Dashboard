import React from 'react';
import StatCard from '../components/StatCard';
import ActivityItem from '../components/ActivityItem';

const Dashboard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Responsive Grid Setup: 1 column on mobile, 2 columns on tablets/desktops */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* 1. Performance Chart Card */}
        <StatCard title="Metric Card">
          <div className="w-full flex flex-col gap-3 justify-center items-center text-gray-500 text-xs py-4 sm:py-6">
            <div className="h-28 w-full flex items-end gap-2 px-2 sm:px-4">
              <div className="bg-gradient-to-t from-purple-500 to-pink-500 w-full h-[40%] rounded-t-sm transition-all duration-300"></div>
              <div className="bg-gradient-to-t from-purple-500 to-pink-500 w-full h-[65%] rounded-t-sm transition-all duration-300"></div>
              <div className="bg-gradient-to-t from-purple-500 to-pink-500 w-full h-[50%] rounded-t-sm transition-all duration-300"></div>
              <div className="bg-gradient-to-t from-purple-500 to-pink-500 w-full h-[85%] rounded-t-sm transition-all duration-300"></div>
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase text-gray-400 font-mono tracking-wider text-center px-2">
              Jan - Jun Performance Line
            </span>
          </div>
        </StatCard>

        {/* 2. Active Users Chart Card */}
        <StatCard title="Active Users Grid">
          <div className="w-full flex justify-around items-end h-28 px-2 sm:px-4 pt-4">
            <div className="w-3 sm:w-4 bg-cyan-400 h-[70%] rounded-t-sm transition-all duration-300"></div>
            <div className="w-3 sm:w-4 bg-purple-500 h-[45%] rounded-t-sm transition-all duration-300"></div>
            <div className="w-3 sm:w-4 bg-cyan-400 h-[90%] rounded-t-sm transition-all duration-300"></div>
            <div className="w-3 sm:w-4 bg-purple-500 h-[60%] rounded-t-sm transition-all duration-300"></div>
            <div className="w-3 sm:w-4 bg-cyan-400 h-[80%] rounded-t-sm transition-all duration-300"></div>
          </div>
        </StatCard>

        {/* 3. Target Analysis Card */}
        <StatCard title="Target Analysis">
          <div className="text-center py-6 px-4 flex flex-col justify-center h-full min-h-[112px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">84,290</h2>
            <p className="text-xs text-emerald-400 font-medium mt-1.5">+14.6% Conversion Spike</p>
          </div>
        </StatCard>

        {/* 4. Latest Activities Card */}
        <StatCard title="Latest Activities">
          <div className="flex flex-col gap-3 w-full py-1">
            <ActivityItem user="Customer 1" action="Ordered product catalog item" time="21 hours ago" initial="C1" />
            <ActivityItem user="Customer 2" action="Updated profile billing logs" time="1 hour ago" initial="C2" />
            <ActivityItem user="Customer 3" action="Logged in security console" time="1 hour ago" initial="C3" />
          </div>
        </StatCard>

      </div>
    </div>
  );
};

export default Dashboard;