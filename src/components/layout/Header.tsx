import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left - Title and Breadcrumb */}
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Main Title</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>Main</span>
            <span className="mx-2">›</span>
            <span>Sub</span>
          </div>
        </div>

        {/* Right - Notification and User */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white text-sm font-medium">
              JS
            </div>
            <span className="text-sm font-medium text-gray-700">John Smith</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;