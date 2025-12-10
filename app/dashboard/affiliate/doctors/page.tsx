"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Plus,
  RefreshCw,
  Download,
  ArrowUpDown,
} from "lucide-react";

// ✅ TEMP DATA (You can later move this into data.ts)
import { affiliateDoctors } from "@/lib/data";
import AffiliateStatCards from "@/components/affiliate/AffiliateStatCards";


export default function AffiliateDoctorsPage() {
  const router = useRouter();
  const [sortAsc, setSortAsc] = useState(true);

  // ✅ SORT BY EARNINGS
  const sortedData = [...affiliateDoctors].sort((a, b) =>
    sortAsc ? a.totalEarnings - b.totalEarnings : b.totalEarnings - a.totalEarnings
  );

  return (
    <div className="p-6 bg-[#F7F8FA] min-h-screen">
       
      {/* ✅ BREADCRUMB */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <span
          className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
          onClick={() => router.push("/dashboard/affiliate")}
        >
          Affiliate
        </span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-green-800 font-semibold">Doctors</span>
      </div>

         <AffiliateStatCards />
      {/* ✅ MAIN CARD */}
      <div className="bg-white rounded-xl border p-4">

        {/* ✅ HEADER */}
        <div className="flex items-center justify-between mb-4">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            <h3 className="font-semibold">Affiliate Doctors</h3>

            <div className="flex items-center bg-gray-100 rounded-md p-2 w-[240px]">
              <Image
                src="/search.png"
                alt="Search"
                width={16}
                height={16}
                className="mr-2"
              />
              <input
                type="text"
                placeholder="Search here"
                className="flex-1 bg-transparent outline-none text-sm px-2"
              />
            </div>

            <Button size="icon" variant="outline" className="bg-gray-100">
              <Plus color="green" size={16} />
            </Button>

            <Button size="icon" variant="outline" className="bg-gray-100">
              <RefreshCw color="green" size={16} />
            </Button>

            {/* ✅ SORT */}
            <Button
              size="icon"
              variant="outline"
              className="bg-gray-100"
              onClick={() => setSortAsc(!sortAsc)}
            >
              <ArrowUpDown color="green" size={16} />
            </Button>
          </div>

          {/* RIGHT */}
          <Button size="icon" variant="outline" className="bg-gray-100">
            <Download color="green" size={16} />
          </Button>
        </div>

        {/* ✅ TABLE */}
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="p-3 text-left">Doctor Name</th>
                <th className="p-3 text-left">Speciality</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-center">Total Earnings</th>
                <th className="p-3 text-center">Status</th>
              </tr>
            </thead>

            <tbody>
              {sortedData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">

                  <td className="p-3 flex items-center gap-2">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                      unoptimized
                    />
                    {item.name}
                  </td>

                  <td className="p-3">{item.speciality}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.mobile}</td>

                  <td className="p-3 text-center font-semibold">
                    ₹ {item.totalEarnings.toLocaleString()}
                  </td>

                  <td
                    className={`p-3 text-center font-medium ${
                      item.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ PAGINATION */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-4">
          <p>Rows per page: 4</p>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="outline">{"<"}</Button>
            <Button size="icon" variant="outline">1</Button>
            <Button size="icon" variant="outline">{">"}</Button>
          </div>
        </div>

      </div>
    </div>
  );
}
