// src/components/Sidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  UserPlus,
  Calendar,
  Stethoscope,
  Ticket,
  AlertCircle,
  Share2,
  ChevronDown,
  ChevronRight,
  DollarSign,
  CreditCard,
  UserCheck,
  ShoppingBag,
  Monitor,
  Layers,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

type OpenMenuKey = "affiliate" | "payment" | "customization";

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const [openMenus, setOpenMenus] = useState<Record<OpenMenuKey, boolean>>({
    affiliate: true,
    payment: false,
    customization: true,
  });

  const toggleMenu = (menu: OpenMenuKey) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isActive = (path: string) => pathname === path;

  const sections = [
    {
      title: "Main",
      items: [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: Users, label: "Doctors", href: "/dashboard/doctors" },
        { icon: UserPlus, label: "Patients", href: "/dashboard/patients" },
        { icon: Calendar, label: "Appointments", href: "/dashboard/appointments" },
        { icon: Stethoscope, label: "Speciality", href: "/dashboard/speciality" },
        { icon: Ticket, label: "Coupons", href: "/dashboard/coupons" },
        { icon: AlertCircle, label: "Concerns", href: "/dashboard/concerns" },
        { icon: Share2, label: "Referral", href: "/dashboard/referral" },
      ],
    },
    {
      title: "Affiliate",
      key: "affiliate" as OpenMenuKey,
      expandable: true,
      items: [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/affiliate" },
        { icon: DollarSign, label: "Commission", href: "/dashboard/affiliate/commission" },
        { icon: Ticket, label: "Coupons", href: "/dashboard/affiliate/coupons" },
        { icon: ShoppingBag, label: "Sales", href: "/dashboard/affiliate/sales" },
        {
          type: "submenu",
          key: "payment" as OpenMenuKey,
          icon: CreditCard,
          label: "Payment",
          children: [
            {
              label: "Pending Payment",
              href: "/dashboard/affiliate/payment/pending-payments",
            },
            {
              label: "Payment History",
              href: "/dashboard/affiliate/payment/payment-history",
            },
          ],
        },
        { icon: UserCheck, label: "Doctors", href: "/dashboard/affiliate/doctors" },
      ],
    },
    {
      title: "Customization",
      key: "customization" as OpenMenuKey,
      expandable: true,
      items: [
        { icon: Monitor, label: "Web", href: "/dashboard/customization/web" },
        {
          icon: Layers,
          label: "App",
          href: "/dashboard/customization/app",
        },
      ],
    },
  ];

  // ─────────────────────────────────────────────
  // RENDER HELPERS
  // ─────────────────────────────────────────────

  const renderLinkItem = (item: any, indent = 0) => {
  const Icon = item.icon;
  const active = isActive(item.href);

  const handleClick = () => {
    // ✅ Close sidebar only on small screens
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <Link
      key={item.href}
      href={item.href}
      onClick={handleClick}
      className={`flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-colors ${
        active
          ? "bg-green-50 text-green-700 font-semibold"
          : "text-gray-700 hover:bg-gray-100"
      }`}
      style={{ paddingLeft: `${indent * 16 + 16}px` }}
    >
      {Icon && (
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F4F6F8]">
          <Icon className="w-4 h-4 text-gray-600" />
        </div>
      )}
      <span>{item.label}</span>
    </Link>
  );
};


  const renderSubmenuItem = (item: any, indent = 0) => {
    const Icon = item.icon;
    const open = openMenus[item.key as OpenMenuKey];

    return (
      <div key={item.label} className="space-y-1">
        <button
          onClick={() => toggleMenu(item.key as OpenMenuKey)}
          className="w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-xl text-gray-700 hover:bg-gray-100"
          style={{ paddingLeft: `${indent * 16 + 16}px` }}
        >
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F4F6F8]">
                <Icon className="w-4 h-4 text-gray-600" />
              </div>
            )}
            <span>{item.label}</span>
          </div>
          {open ? (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {open && (
          <div className="mt-1 space-y-1">
            {item.children.map((child: any) =>
              renderLinkItem(child, indent + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  const renderSection = (section: any) => {
    if (!section.expandable) {
      return (
        <div key={section.title} className="mb-6">
          <div className="px-4 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {section.title}
          </div>
          <div className="mt-2 space-y-1">
            {section.items.map((item: any) => renderLinkItem(item))}
          </div>
        </div>
      );
    }

    const open = openMenus[section.key as OpenMenuKey];

    return (
      <div key={section.title} className="mb-6">
        <button
          onClick={() => toggleMenu(section.key as OpenMenuKey)}
          className="w-full flex items-center justify-between px-4 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700"
        >
          <span>{section.title}</span>
          {open ? (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {open && (
          <div className="mt-2 space-y-1">
            {section.items.map((item: any) =>
              item.type === "submenu"
                ? renderSubmenuItem(item, 0)
                : renderLinkItem(item)
            )}
          </div>
        )}
      </div>
    );
  };

  // ─────────────────────────────────────────────
  // SIDEBAR CONTAINER (FLOATING WHITE PANEL)
  // ─────────────────────────────────────────────
  return ( 
    <aside
      className={`
        fixed z-40 bg-white shadow-xl transition-all duration-300
        rounded-[30px]
        w-[260px]
        top-[84px]
        bottom-[24px]
        left-[16px]
        overflow-y-auto
        ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}
      `}
    >
      <nav className="p-4">{sections.map((s) => renderSection(s))}</nav>
    </aside>
  );

}
