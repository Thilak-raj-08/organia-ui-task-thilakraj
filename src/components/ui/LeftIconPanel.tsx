import { Check, MapPin, Mail, MessagesSquare } from 'lucide-react';

const LeftIconPanel = () => {
  const items = [
    { icon: MapPin, label: 'Location', tone: 'green', status: 'done' },
    { icon: MessagesSquare, label: 'Sub1', tone: 'green', status: 'done' },
    { icon: MessagesSquare, label: 'Sub2', tone: 'blue', status: 'active' },
    { icon: MessagesSquare, label: 'Sub3', tone: 'gray', status: 'pending' },
  ] as const;

  const toneStyles = {
    green: 'text-green-600 bg-green-50 border-green-100',
    blue: 'text-blue-600 bg-blue-50 border-blue-100',
    gray: 'text-gray-500 bg-gray-50 border-gray-200',
  } as const;

  const labelStyles = {
    green: 'text-green-600',
    blue: 'text-blue-600',
    gray: 'text-gray-500',
  } as const;

  return (
    <div className="pr-0 sm:pr-6">
      <div className="relative hidden sm:block">
        <div className="absolute left-3 top-[34px] bottom-[34px] w-px bg-gray-200"></div>
        <div className="flex flex-col gap-5">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 min-h-[68px]">
              <div className="relative z-10 w-6 flex justify-center">
                {item.status === 'done' ? (
                  <div className="w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                    <Check size={14} className="text-green-600" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#eef1f5] border border-gray-200"></div>
                )}
              </div>
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-[0_1px_0_rgba(15,42,75,0.08)] ${
                    toneStyles[item.tone]
                  }`}
                >
                  <item.icon size={18} />
                </div>
                <span className={`text-[11px] font-medium ${labelStyles[item.tone]}`}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:hidden">
        <div className="relative">
          <div className="absolute left-[18px] right-[18px] top-[26px] h-px bg-gray-200"></div>
          <div className="flex items-start gap-4 overflow-x-auto no-scrollbar py-2 relative z-10">
            {items.map((item, index) => (
              <div key={index} className="min-w-[84px] flex flex-col items-center gap-2">
                <div className="w-9 h-9 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500">
                  {item.status === 'done' ? <Check size={16} className="text-green-600" /> : null}
                </div>
                <div
                  className={`w-11 h-11 rounded-full border flex items-center justify-center shadow-[0_1px_0_rgba(15,42,75,0.08)] ${
                    toneStyles[item.tone]
                  }`}
                >
                  <item.icon size={18} />
                </div>
                <span className={`text-[11px] font-medium ${labelStyles[item.tone]}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftIconPanel;
