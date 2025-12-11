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
import { allRequestsHistory } from "@/lib/data";

export default function PaymentHistoryPage() {
  const router = useRouter();

  const [sortAsc, setSortAsc] = useState(true);

  const sortedData = [...allRequestsHistory].sort((a, b) => {
    const dateA = new Date(a.approvalDate || 0).getTime();
    const dateB = new Date(b.approvalDate || 0).getTime();
    return sortAsc ? dateA - dateB : dateB - dateA;
  });

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
        <span className="text-gray-600 font-semibold">Payment</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-green-800 font-semibold">Payment History</span>
      </div>

      {/* ✅ MAIN CARD */}
      <div className="bg-white rounded-xl border p-4">

        {/* ✅ HEADER */}
       {/* HEADER */}
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">

  {/* LEFT SIDE */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap">

    <h3 className="font-semibold whitespace-nowrap">Payment History</h3>

    {/* Search Box */}
    <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 w-full sm:w-[240px]">
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
        className="flex-1 bg-transparent outline-none text-sm px-1"
      />
    </div>

    {/* ACTION BUTTONS */}
    <div className="flex items-center gap-2">
      <Button size="icon" variant="outline" className="bg-gray-100">
        <Plus color="green" size={16} />
      </Button>

      <Button size="icon" variant="outline" className="bg-gray-100">
        <RefreshCw color="green" size={16} />
      </Button>

      {/* SORT BUTTON */}
      <Button
        size="icon"
        variant="outline"
        className="bg-gray-100"
        onClick={() => setSortAsc(!sortAsc)}
        title="Sort by Approval Date"
      >
        <ArrowUpDown color="green" size={16} />
      </Button>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex justify-start md:justify-end">
    <Button size="icon" variant="outline" className="bg-gray-100">
      <Download color="green" size={16} />
    </Button>
  </div>
</div>


        {/* ✅ TABLE */}
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="p-3 text-left">Doctor Name</th>
                <th className="p-3 text-left">Email-id</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-center">Amount Withdrawal</th>
                <th className="p-3 text-center">Requested Date</th>
                <th className="p-3 text-center">Wallet Amount</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3 text-center">Approval Date</th>
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

                  <td className="p-3">{item.email}</td>

                  <td className="p-3">{item.mobile}</td>

                  <td className="p-3 text-center">₹ {item.amount}</td>

                  <td className="p-3 text-center">{item.requestedDate}</td>

                  <td className="p-3 text-center">₹ {item.walletAmount}</td>

                  <td
                    className={`p-3 text-center font-medium ${
                      item.status === "Paid"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>

                  <td className="p-3 text-center">{item.approvalDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ PAGINATION */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-4">
          <p>Rows per page: 7</p>
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
