"use client";

import { useState } from "react";
import Image from "next/image";
import { tabs, dashboardData, topDoctors, topProducts } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AffiliateDashboardPage() {
  const [activeTab, setActiveTab] = useState("Month So Far");
  const router = useRouter();
  const currentStats = dashboardData[activeTab as keyof typeof dashboardData];


  return (
    <div className="space-y-6">

    <div className="flex items-center gap-2 text-sm mb-6">
            <span
              className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
              onClick={() => router.push("/dashboard/affiliate")}
            >
              Affiliate
            </span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-green-800 font-semibold">Dashboard</span>
          </div>
      {/* -------------------- TABS -------------------- */}
      <div className="bg-white rounded-xl px-6 py-4 flex justify-between text-sm font-medium text-gray-500">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 transition ${
              activeTab === tab
                ? "text-[#3A643B] border-b-2 border-[#3A643B]"
                : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* -------------------- STATS CARDS -------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        

        {Object.entries(currentStats).map(([key, stat]) => (

          <div
            key={key}
            className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[#F4F8F5] flex items-center justify-center">
            <Image
              src={stat.icon}
              alt={key}
              width={22}
              height={22}
              className="object-contain"
            />
          </div>


            <div>
              <p className="font-semibold capitalize">{key}</p>

              <p className="text-2xl font-semibold text-[#2E6B3F]">
                {stat.value}
                <span className="text-xs text-gray-400 ml-1">
                  {stat.unit}
                </span>
              </p>

              <p
                className={`text-xs mt-1 ${
                  stat.trend >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {stat.trend >= 0 ? "↑" : "↓"} {Math.abs(stat.trend)}%
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* -------------------- LOWER GRID -------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* -------------------- TOP DOCTORS -------------------- */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold mb-5">Top Affiliate Doctors</h3>

          <div className="space-y-4">
            {topDoctors.map((doc, i) => (
              <div
                key={i}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{i + 1}.</span>

                  <div
                    className={`w-10 h-10 rounded-full overflow-hidden ${doc.color}`}
                  >
                    <Image
                      src={doc.avatar}
                      alt={doc.name}
                      width={40}
                      height={40}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-gray-500">
                      {doc.speciality}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-md font-medium ${
                    doc.trend >= 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {doc.trend >= 0 ? "↑" : "↓"} {Math.abs(doc.trend)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------- TOP PRODUCTS -------------------- */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold mb-5">Top Affiliate Products</h3>

          <div className="space-y-4">
            {topProducts.map((product, i) => (
              <div
                key={i}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{i + 1}.</span>

                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full`}
                  >
                    
                    <Image
                    src={product.image}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="object-cover rounded-full"
                  />
                  </div>

                  

                  <p className="text-sm font-medium">
                    {product.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
