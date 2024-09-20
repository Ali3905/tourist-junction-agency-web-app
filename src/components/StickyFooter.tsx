"use client"
import React from 'react';
import Link from 'next/link';
import { Home, Scissors, Building } from 'lucide-react';

const footerItems = [
  {
    label: 'Home',
    href: '/home',
    icon: <Home className="h-6 w-6" />,
  },
  {
    label: 'Vehicle Inspection',
    href: '/vehicle-inspection',
    icon: <Scissors className="h-6 w-6" />,
  },
  {
    label: 'Vehicle Transaction',
    href: '/vehicle-transaction',
    icon: <Building className="h-6 w-6" />,
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: <Building className="h-6 w-6" />,
  },
];

const StickyFooter = () => {
  return (
    <div className="fixed bottom-0 w-full px-4 bg-white shadow-md flex justify-between items-center py-4 border-t border-gray-200 sm:hidden">

      {/* Footer Icons */}
      {footerItems.slice(0, 2).map((item, index) => (
        <Link href={item.href} key={index} className="flex flex-col items-center text-gray-500 hover:text-blue-500">
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}

      {/* Pay Bill Circle Icon - centered */}
      <div className="relative mb-14 flex justify-center items-center">
        <Link href="/pay-bill" className="absolute">
          <div className="bg-blue-500 text-white h-16 w-16 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-center text-sm">Get Plan</span>
          </div>
        </Link>
      </div>

      {/* Footer Icons */}
      {footerItems.slice(2).map((item, index) => (
        <Link href={item.href} key={index} className="flex flex-col items-center text-gray-500 hover:text-blue-500">
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}

    </div>
  );
};

export default StickyFooter;
