import { Check, MapPin, Image, Mail, User } from 'lucide-react';

const LeftIconPanel = () => {
  const icons = [
    { icon: Check, label: 'Check', color: 'text-green-500', bgColor: 'bg-green-50' },
    { icon: MapPin, label: 'Location', color: 'text-green-500', bgColor: 'bg-green-50' },
    { icon: Check, label: 'Sub1', color: 'text-green-500', bgColor: 'bg-green-50' },
    { icon: Image, label: 'Sub2', color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { icon: Mail, label: 'Sub3', color: 'text-gray-400', bgColor: 'bg-gray-50' },
    { icon: User, label: 'Sub4', color: 'text-gray-400', bgColor: 'bg-gray-50' },
  ];

  return (
    <div className="flex flex-col space-y-4 pr-4 border-r border-gray-200">
      {icons.map((item, index) => (
        <div key={index} className="flex flex-col items-center space-y-1">
          <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center`}>
            <item.icon size={20} className={item.color} />
          </div>
          <span className="text-xs text-gray-600">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default LeftIconPanel;