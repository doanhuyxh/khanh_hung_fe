import { useState, useEffect } from 'react';

export default function Dropdown({ icon, items }: { icon: any, items: any[] }) {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClickOutside = (event: any) => {
        if (!event.target.closest('.dropdown-container')) {
            setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container relative inline-block">
      <button className="px-4 py-2 rounded-md hover:bg-red-100" onClick={toggleDropdown}>
        {icon}
      </button>

        {isOpen && (
        <div className="absolute top-0 translate-y-[35%] mt-2 w-auto bg-white rounded-md shadow-lg z-1000">
          {items.map((item, index) => (
            <button
              key={index}
              className="flex items-center w-full px-4 py-2 text-left gap-2 hover:bg-gray-100 text-nowrap"
              onClick={item.onClick}
            >
              <span className="mr-2 text-nowrap">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
