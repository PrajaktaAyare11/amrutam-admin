"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight, Plus, RefreshCw, Download } from "lucide-react";
import { allRequests } from "@/lib/data";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function PendingPaymentsPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<number[]>([]);
  const allIds = allRequests.map((i) => i.id);

  const allSelected = selected.length === allIds.length;
  const partiallySelected = selected.length > 0 && !allSelected;

  // Select / unselect all
  const toggleAll = () => {
    setSelected(allSelected ? [] : allIds);
  };

  // Select / unselect a single row
  const toggleOne = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-[#F7F8FA] min-h-screen">

      {/* BREADCRUMB */}
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
        <span className="text-green-800 font-semibold">Pending Payment</span>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-xl border p-4">

        {/* HEADER */}
        {/* HEADER */}
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">

  {/* LEFT SIDE → Wraps properly on mobile */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap">

    <h3 className="font-semibold whitespace-nowrap">
      Pending Payment Request
    </h3>

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

    {/* Buttons */}
    <div className="flex items-center gap-2">
      <Button size="icon" variant="outline" className="bg-gray-100">
        <Plus color="green" size={16} />
      </Button>

      <Button size="icon" variant="outline" className="bg-gray-100">
        <RefreshCw color="green" size={16} />
      </Button>
    </div>
  </div>

  {/* RIGHT SIDE — moves below on mobile */}
  <div className="flex justify-start md:justify-end">
    <Button size="icon" variant="outline" className="bg-gray-100">
      <Download color="green" size={16} />
    </Button>
  </div>
</div>


        {/* TABLE */}
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                
                {/* HEADER CHECKBOX */}
                <th className="p-3 text-left">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={toggleAll}
                    ref={(el) => {
                      if (el) {
                        //el.indeterminate = partiallySelected;
                      }
                    }}
                  />
                </th>

                <th className="p-3 text-left">Doctor Name</th>
                <th className="p-3 text-left">Email-id</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-center">Amount Withdrawal</th>
                <th className="p-3 text-center">Requested Date</th>
                <th className="p-3 text-center">Wallet Amount</th>
                <th className="p-3 text-center">Details</th>
                <th className="p-3 text-center">Approval</th>
              </tr>
            </thead>

            <tbody>
              {allRequests.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">

                  {/* ROW CHECKBOX */}
                  <td className="p-3">
                    <Checkbox
                      checked={selected.includes(item.id)}
                      onCheckedChange={() => toggleOne(item.id)}
                    />
                  </td>

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

                  <td className="p-3 text-center text-green-700 cursor-pointer">
                    View All
                  </td>

                  <td className="p-3 text-center">
                    <span className="text-green-700 cursor-pointer mr-3">
                      Accept
                    </span>
                    <span className="text-red-600 cursor-pointer">
                      Decline
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
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
