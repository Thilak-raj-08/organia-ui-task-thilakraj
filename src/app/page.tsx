'use client';

import { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import TabNavigation from '../components/ui/TabNavigation';
import DetailsCard from '../components/forms/DetailsCard';
import SubDetails from '../components/forms/SubDetails';
import LeftIconPanel from '../components/ui/LeftIconPanel';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="pl-0 md:pl-20 h-screen flex flex-col">
        <div className="sticky top-0 z-20">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
        </div>
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">
          <div className="bg-white/80 border border-gray-200 rounded-2xl sm:rounded-[28px] p-3 sm:p-4 lg:p-6 shadow-sm">
            <TabNavigation />

            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
              <LeftIconPanel />

              <div className="flex-1 space-y-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <DetailsCard title="Details 1" cardNumber={1} />
                  <DetailsCard title="Details 2" cardNumber={2} />
                </div>

                <SubDetails />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}