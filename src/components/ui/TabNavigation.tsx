'use client';
import { useState } from 'react';
import { ChevronRight, ArrowLeftRight, CircleDot, MapPin } from 'lucide-react';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('T 01');

  const tabs = ['T 01', 'T 02', 'T 03', 'T 04', 'T 05', 'T 06'];

  return (
    <div className="space-y-4">
      {/* S-01 and S-02 Section */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 bg-[#0f2a4b] text-white px-4 py-2 rounded-full shadow-sm">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <CircleDot className="text-[#0f2a4b]" size={14} />
          </div>
          <span className="text-sm font-semibold">S - 01</span>
          <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-semibold">$</span>
        </div>

        <ChevronRight className="text-gray-400" size={20} />

        <div className="flex items-center gap-3 bg-[#e9eef7] px-4 py-2 rounded-full">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-200">
            <MapPin size={14} className="text-orange-400" />
          </div>
          <span className="text-sm font-semibold text-[#1f2b3a]">S - 02</span>
          <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-[11px] text-white font-semibold">$</span>
        </div>

        <button className="ml-auto p-2 rounded-full border border-gray-200 hover:bg-gray-100">
          <ArrowLeftRight className="text-gray-600" size={18} />
        </button>
      </div>

      {/* Main Details Accordion */}
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <ChevronRight className="text-gray-600" size={18} />
        <span className="font-semibold text-[#0b1b2d]">Main Details</span>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white border border-gray-200 rounded-3xl sm:rounded-full px-3 py-2 shadow-sm">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pr-2 pb-1 sm:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-9 sm:h-10 px-4 sm:px-6 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-[#0f2a4b] text-white shadow-[0_4px_10px_rgba(15,42,75,0.25)]'
                  : 'text-[#0f2a4b] hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button className="bg-[#7b1f3f] hover:bg-[#661932] text-white h-9 sm:h-10 px-6 rounded-full text-xs font-semibold tracking-wide shadow w-full sm:w-auto">
          Add T
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
