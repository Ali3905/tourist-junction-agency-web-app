import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Array for Navbar Links
const navItems = [
  { label: 'Home', href: '/home' },
  { label: 'Vehicle Inspection', href: '/vehicle-inspection' },
  { label: 'Vehicle Transaction', href: '/vehicle-transaction' },
  { label: 'Profile', href: '/profile' },
];

const Navbar = () => {
  return (
    <div className="py-6 px-[40px] bg-slate-50 flex justify-between mx-auto sticky top-0 z-50 sm:flex hidden">
      {/* Logo or Image */}
      <Image src={''} alt='img' width={20} height={20} />
      
      {/* Navigation Links */}
      <ul className="flex gap-6">
        {navItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <li>{item.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;






