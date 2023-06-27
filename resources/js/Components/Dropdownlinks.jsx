// Dropdown.js

import { useState } from 'react';
import { Head, usePage,Link } from '@inertiajs/react';

const Dropdownlinks = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center w-full py-2 px-4 text-left text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
      >
        <span className="mr-2">{title}</span>
        <svg
          className={`h-5 w-5 ${isOpen ? 'transform rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 13l-5-5h10l-5 5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-full bg-gray-800 shadow-lg rounded-md">
          <div className="py-1">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdownlinks;
