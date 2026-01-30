import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <h2 className="text-lg font-semibold">Content will go here...</h2>
        </main>
      </div>
    </div>
  );
}