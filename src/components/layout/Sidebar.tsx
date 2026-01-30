import { Home, Truck, Package, Box, ShoppingCart, FileText, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Truck, label: 'Menu2' },
    { icon: Package, label: 'Menu3' },
    { icon: Box, label: 'Menu4' },
    { icon: ShoppingCart, label: 'Menu5' },
    { icon: FileText, label: 'Menu6' },
    { icon: Settings, label: 'Menu7' },
    { icon: FileText, label: 'Menu8' },
  ];

  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-6">
      {/* Logo */}
      <div className="w-10 h-10 bg-[#1e3a5f] rounded-lg flex items-center justify-center mb-4">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-2 h-2 bg-white rounded-sm"></div>
          <div className="w-2 h-2 bg-white rounded-sm"></div>
          <div className="w-2 h-2 bg-white rounded-sm"></div>
          <div className="w-2 h-2 bg-white rounded-sm"></div>
        </div>
      </div>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <div key={index} className="relative group">
          <button
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              item.active
                ? 'bg-[#1e3a5f] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <item.icon size={20} />
          </button>
          
          {/* Tooltip */}
          <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;