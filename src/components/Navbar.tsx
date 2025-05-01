import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">Deepalytics</div>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={`#${item.id}`} className="text-gray-700 hover:text-blue-600 transition duration-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

