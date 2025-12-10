"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
      return;
    }

    // ✅ Force sidebar OPEN on desktop always
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setSidebarOpen(true);
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#F7F8FA] relative">
      {/* ✅ Header */}
      <Header isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex">
        {/* ✅ Sidebar (always visible on desktop) */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* ✅ Main Content (shifts correctly) */}
        <main
          className={`pt-[90px] px-6 transition-all duration-300 w-full
            ${sidebarOpen ? "lg:ml-[300px]" : "lg:ml-0"}
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
