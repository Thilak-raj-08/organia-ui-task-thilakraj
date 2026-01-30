import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import TabNavigation from '../components/ui/TabNavigation';
import DetailsCard from '../components/forms/DetailsCard';
import SubDetails from '../components/forms/SubDetails';
import LeftIconPanel from '../components/ui/LeftIconPanel';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <TabNavigation />
          
          {/* Main Content with Left Icons */}
          <div className="flex gap-4 mt-6">
            {/* Left Icon Panel */}
            <LeftIconPanel />
            
            {/* Main Content Area */}
            <div className="flex-1 space-y-6">
              {/* Details Cards */}
              <div className="flex gap-6">
                <DetailsCard title="Details 1" cardNumber={1} />
                <DetailsCard title="Details 2" cardNumber={2} />
              </div>

              {/* Sub Details */}
              <SubDetails />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}