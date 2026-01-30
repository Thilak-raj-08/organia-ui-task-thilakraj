import { Home, Truck, Package, Box, ShoppingCart, FileText, Settings, X } from 'lucide-react';

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
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
    <>
      <div className="w-20 bg-white border-r border-gray-200 flex-col items-center py-4 hidden md:flex fixed left-0 top-0 h-screen z-30 overflow-y-auto no-scrollbar">
        <div className="w-11 h-11 bg-[#0f2a4b] rounded-2xl flex items-center justify-center mb-4 shadow-[0_6px_14px_rgba(15,42,75,0.25)] shrink-0">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-2.5 h-2.5 bg-white rounded-[4px]"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-[4px]"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-[4px]"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-[4px]"></div>
          </div>
        </div>

        <div className="mt-2 flex flex-col items-center gap-5 pb-6">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <button
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors border ${
                  item.active
                    ? 'bg-[#0f2a4b] text-white border-[#0f2a4b]'
                    : 'text-gray-600 hover:bg-gray-100 border-transparent'
                }`}
              >
                <item.icon size={20} />
              </button>
              <span className={`text-[11px] ${item.active ? 'text-[#0f2a4b] font-semibold' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-[2000] ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClose}
        ></div>
        <aside
          className={`absolute left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-2xl transform transition-transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          aria-label="Sidebar"
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#0f2a4b] rounded-2xl flex items-center justify-center shadow-[0_6px_14px_rgba(15,42,75,0.25)] shrink-0">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2.5 h-2.5 bg-white rounded-[4px]"></div>
                  <div className="w-2.5 h-2.5 bg-white rounded-[4px]"></div>
                  <div className="w-2.5 h-2.5 bg-white rounded-[4px]"></div>
                  <div className="w-2.5 h-2.5 bg-white rounded-[4px]"></div>
                </div>
              </div>
              <span className="font-semibold text-[#0b1b2d]">Organia</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 hover:bg-gray-100"
              aria-label="Close sidebar"
            >
              <X size={16} className="text-gray-600" />
            </button>
          </div>

          <div className="p-4 space-y-2 overflow-y-auto no-scrollbar">
            {menuItems.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={onClose}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl border transition-colors ${
                  item.active
                    ? 'bg-[#0f2a4b] text-white border-[#0f2a4b]'
                    : 'text-gray-700 border-transparent hover:bg-gray-100'
                }`}
              >
                <item.icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
