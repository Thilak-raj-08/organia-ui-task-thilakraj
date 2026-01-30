'use client';
import { useState } from 'react';
import { ChevronRight, ArrowLeftRight } from 'lucide-react';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('T01');

  const tabs = ['T 01', 'T 02', 'T 03', 'T 04', 'T 05', 'T 06'];

  return (
    <div className="space-y-4">
      {/* S-01 and S-02 Section */}
      <div className="flex items-center space-x-4">
        {/* S-01 Badge */}
        <div className="flex items-center bg-[#1e3a5f] text-white px-4 py-2 rounded-full space-x-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#1e3a5f] text-xs font-bold">S</span>
          </div>
          <span className="text-sm font-medium">S - 01</span>
          <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs">3</span>
        </div>

        {/* Arrow */}
        <ChevronRight className="text-gray-400" size={20} />

        {/* S-02 Badge */}
        <div className="flex items-center border-2 border-gray-300 px-4 py-2 rounded-full space-x-2">
          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <span className="text-sm font-medium text-gray-700">S - 02</span>
          <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">$</span>
        </div>

        {/* Expand Icon */}
        <button className="ml-auto p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeftRight className="text-gray-600" size={20} />
        </button>
      </div>

      {/* Main Details Accordion */}
      <div className="flex items-center space-x-2 text-sm">
        <ChevronRight className="text-gray-600" size={18} />
        <span className="font-semibold text-gray-900">Main Details</span>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center justify-between bg-white rounded-t-3xl p-2 border-b border-gray-200">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-t-2xl text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-[#1e3a5f] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Add T Button */}
        <button className="bg-[#6b1f4a] hover:bg-[#561939] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
          Add T
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;