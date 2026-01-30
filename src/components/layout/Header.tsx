import { Bell, Menu, User } from 'lucide-react';

type HeaderProps = {
  onMenuClick?: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-100"
            aria-label="Open sidebar"
          >
            <Menu size={18} className="text-gray-700" />
          </button>
          <h1 className="text-xl font-semibold text-[#0b1b2d]">Main Title</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-full border border-gray-200">
            <Bell size={18} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#0f2a4b] rounded-full flex items-center justify-center text-white">
              <User size={16} />
            </div>
            <span className="text-sm font-medium text-gray-700">John Smith</span>
          </div>
        </div>
      </div>

      <div className="flex items-center text-sm text-gray-500 mt-1">
        <span>Main</span>
        <span className="mx-2">&gt;</span>
        <span>Sub</span>
      </div>
    </div>
  );
};

export default Header;