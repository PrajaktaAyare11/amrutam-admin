// src/components/ProfileDropdown.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, LogOut } from "lucide-react";
import Image from "next/image";

interface UserData {
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export default function ProfileDropdown() {
  const router = useRouter();

  // ---------- base user state ----------
  const [user, setUser] = useState<UserData | null>(null);

  // ---------- simple profile/settings UI state ----------
  const [openProfile, setOpenProfile] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const [tempName, setTempName] = useState("");
  const [tempAvatar, setTempAvatar] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsed: UserData = JSON.parse(userData);
      setUser(parsed);
      setTempName(parsed.name);
      setTempAvatar(
        parsed.avatar || `https://i.pravatar.cc/150?u=${parsed.email}`
      );
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  // ----- quick profile save (name + avatar only) -----
  const saveProfileQuick = () => {
    if (!user) return;

    const updatedUser: UserData = {
      ...user,
      name: tempName || user.name,
      avatar: tempAvatar || user.avatar,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setOpenProfile(false);
  };

  const randomAvatar = () => {
    const id = Math.floor(Math.random() * 70) + 1;
    setTempAvatar(`https://i.pravatar.cc/150?img=${id}`);
  };

  


  // ❗ AFTER all hooks – this is safe
  if (!user) return null;

  return (
    <>
      <div className="flex items-center gap-4">
        {/* Message Icon - Hidden on small screens */}
        <div className="relative hidden md:block">
          <Image
            src="/msg.png"
            alt="Messages"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="absolute -top-0 -right-0 w-2 h-2 bg-[#BC0000] rounded-full" />
        </div>

        {/* Notification Icon - Hidden on small screens */}
        <div className="relative hidden md:block">
          <Image
            src="/bell.png"
            alt="Notifications"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="absolute -top-0 -right-0 w-2 h-2 bg-[#BC0000] rounded-full" />
        </div>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <div className="flex items-center gap-3 cursor-pointer">
              {/* User Info */}
              <div className="text-right">
                <p className="text-sm md:text-base font-semibold text-[#28643B]">
                  {user.name}
                </p>
                <p className="text-xs font-medium text-gray-500">
                  {user.role}
                </p>
              </div>

              {/* Avatar */}
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage
                  src={`https://i.pravatar.cc/150?img=32` ||user.avatar }
                  alt={user.name}
                />
                <AvatarFallback className="bg-green-100 text-green-700 font-semibold text-xs">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>

              {/* Settings Icon - Hidden on mobile */}
              <Image
                src="/setting.png"
                alt="Settings"
                width={20}
                height={20}
                className="hidden md:inline-block w-5 h-5"
              />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => setOpenProfile(true)}
              className="cursor-pointer"
            >
              <User className="mr-2 h-4 w-4" />
              <span>My Profile</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => setOpenSettings(true)}
              className="cursor-pointer"
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={handleLogout}
              className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* === SIMPLE PROFILE MODAL === */}
      {openProfile && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[360px] space-y-4">
            <h2 className="font-semibold text-base">Quick Profile Edit</h2>

            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tempAvatar}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <button
                onClick={randomAvatar}
                className="text-xs border px-3 py-1 rounded-md text-[#28643B] border-[#28643B]/40 hover:bg-[#28643B]/5"
              >
                Random Avatar
              </button>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-600">Display Name</label>
              <input
                className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#3A643B] focus:border-[#3A643B]"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setOpenProfile(false)}
                className="text-sm text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={saveProfileQuick}
                className="bg-[#3A643B] text-white text-sm px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === SIMPLE SETTINGS MODAL === */}
      {openSettings && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[300px] space-y-4">
            <h2 className="font-semibold text-base">Theme</h2>

            <button
              className="w-full border py-2 rounded-md text-sm hover:bg-gray-50"
            >
              Light Mode
            </button>

            <button
              className="w-full border py-2 rounded-md text-sm hover:bg-gray-50"
            >
              Dark Mode
            </button>

            <button
              onClick={() => setOpenSettings(false)}
              className="text-xs text-gray-500 pt-2 w-full text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
