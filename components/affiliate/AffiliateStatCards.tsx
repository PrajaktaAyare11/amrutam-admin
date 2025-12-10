"use client";

import Image from "next/image";
import { affiliateStats } from "@/lib/data";

export default function AffiliateStatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {affiliateStats.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl border p-6 flex items-center gap-5"
        >
          {/* ICON */}
          <div className="bg-[#F5F2E8] p-3 rounded-full">
            <Image
              src={item.icon}
              alt={item.title}
              width={28}
              height={28}
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-sm text-gray-600 font-medium">
              {item.title}
            </p>
            <h3 className="text-2xl font-bold text-[#2F5F3E]">
              {item.value}{" "}
              <span className="text-sm font-medium text-gray-500">
                {item.unit}
              </span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
