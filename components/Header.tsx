// src/components/Header.tsx
'use client';

import { Input } from '@/components/ui/input';
import Image from 'next/image';
import ProfileDropdown from './ProfileDropdown';

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 h-[62px] px-4 py-2 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      {/* Left Section - Logo + Menu Toggle */}
      <div className="flex items-center gap-3">
        {/* Logo Icon */}
        <Image
          src="/amrutamlogo1.png"
          alt="Amrutam"
          width={56}
          height={56}
          className="h-14 w-14 object-contain"
          priority
        />

        {/* Logo Text - Hidden on small mobile */}
        <Image
          src="/amrutam.png"
          alt="AMRUTAM"
          width={160}
          height={48}
          className="h-12 w-32 md:h-12 md:w-40 object-contain hidden sm:block"
          priority
        />

        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-11 h-11 md:w-16 md:h-16 flex items-center justify-center transition-colors"
          aria-label="Toggle sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-6 h-6 transition-colors ${
              isOpen ? 'text-[#28643B]' : 'text-gray-400'
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-2 w-full max-w-md">
          <Image
            src="/search.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 mr-2 opacity-40"
          />
          <Input
            type="search"
            placeholder="Search here"
            className="flex-1 bg-transparent border-none outline-none text-sm font-medium placeholder:text-[#28643B4D] text-[#28643B4D] focus:text-[#333548BF] h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      {/* Right Section - Notifications + Profile */}
      <ProfileDropdown />
    </header>
  );
}