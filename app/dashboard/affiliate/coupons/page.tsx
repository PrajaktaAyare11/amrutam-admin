"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Plus, RefreshCw, Download } from "lucide-react";
import Image from "next/image";
import { specialCoupons} from "@/lib/data";
import CustomToggle from "@/components/ui/toggle";
import { useState } from "react";
import { useRouter } from "next/navigation";

/* ✅ Floating Label Select */
const FloatingSelectField = ({
  label,
  required = false,
  placeholder,
  children,
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <div className="absolute -top-2.5 left-3 z-10">
        <span className="bg-white px-1 text-xs font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </div>

      <div className="h-[50px]">{children}</div>
    </div>
  );
};

export default function CouponsPage() {
  const [defaultEnabled, setDefaultEnabled] = useState(true);
  const [cartEnabled, setCartEnabled] = useState(true);
  const router = useRouter();

  return (
    <div className="p-6 bg-[#F7F8FA] min-h-screen space-y-6">

      {/* ✅ Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span
          className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
          onClick={() => router.push("/dashboard/affiliate")}
        >
          Affiliate
        </span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-green-800 font-semibold">Coupons</span>
      </div>

      {/* ✅ Default Coupons */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Default Coupons</h3>
        <CustomToggle
          enabled={defaultEnabled}
          onChange={() => setDefaultEnabled(!defaultEnabled)}
        />
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <FloatingSelectField label="Doctor Name" required placeholder="Applies to all Doctors">
              <Select>
                <SelectTrigger className="w-full h-[50px] border border-gray-300 pt-2">
                  <SelectValue placeholder="Applies to all Doctors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Doctors</SelectItem>
                </SelectContent>
              </Select>
            </FloatingSelectField>

            <FloatingSelectField label="Usage Limit" required placeholder="Please select Usage Limit">
              <Select>
                <SelectTrigger className="w-full h-[50px] border border-gray-300 pt-2">
                  <SelectValue placeholder="Please select Usage Limit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                </SelectContent>
              </Select>
            </FloatingSelectField>

            <FloatingSelectField label="Percentage" required placeholder="Please select Percentage">
              <Select>
                <SelectTrigger className="w-full h-[50px] border border-gray-300 pt-2">
                  <SelectValue placeholder="Please select Percentage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10%</SelectItem>
                  <SelectItem value="20">20%</SelectItem>
                  <SelectItem value="30">30%</SelectItem>
                </SelectContent>
              </Select>
            </FloatingSelectField>

          </div>

          <div className="flex justify-end">
            <Button className="bg-[#3A643B] text-white w-40 h-9">
              Update
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ✅ Default Cart Discount */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Default Cart Discount</h3>
        <CustomToggle
          enabled={cartEnabled}
          onChange={() => setCartEnabled(!cartEnabled)}
        />
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <FloatingSelectField label="Product Name" required placeholder="Please Select a Product">
              <Select>
                <SelectTrigger className="w-full h-[50px] border border-gray-300 pt-2">
                  <SelectValue placeholder="Please Select a Product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nari">Nari Sandariya Malt</SelectItem>
                </SelectContent>
              </Select>
            </FloatingSelectField>

            <FloatingSelectField label="Doctor Name" required placeholder="Please select Doctor">
              <Select>
                <SelectTrigger className="w-full h-[50px] border border-gray-300 pt-2">
                  <SelectValue placeholder="Please select Doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alina">Dr. Alina</SelectItem>
                  <SelectItem value="jack">Dr. Jack</SelectItem>
                </SelectContent>
              </Select>
            </FloatingSelectField>

            <FloatingSelectField label="Usage Limit" required placeholder="Please select Usage Limit">
              <Select>
                <SelectTrigger className="w-full h-[50px] border border-gray-300 pt-2">
                  <SelectValue placeholder="Please select Usage Limit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </FloatingSelectField>

            <FloatingSelectField label="Discount" required placeholder="Please select Discount">
              <Select>
                <SelectTrigger className="w-full h-[50px] border border-gray-300 pt-2">
                  <SelectValue placeholder="Please select Discount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10%</SelectItem>
                  <SelectItem value="20">20%</SelectItem>
                </SelectContent>
              </Select>
            </FloatingSelectField>

          </div>

          <div className="flex justify-end">
            <Button className="bg-[#3A643B] text-white w-40 h-9">
              Update
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ✅ Special Coupons Table Header */}
     

      {/* ✅ Special Coupons Table */}
      <Card>
        <CardContent className="p-6">
           <div
  className="
    flex flex-col gap-3 mb-2
    md:flex-row md:items-center md:justify-between
  "
>
  {/* LEFT SIDE (Search + buttons) */}
  <div
    className="
      flex flex-col gap-3
      md:flex-row md:items-center md:gap-4
    "
  >
    <h3 className="font-semibold">Special Coupons</h3>

    {/* Search Bar */}
    <div
      className="
        flex items-center bg-gray-100 rounded-md p-2 
        w-full md:w-[220px]
      "
    >
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

    {/* Buttons Row (wraps on mobile) */}
    <div className="flex gap-2">
      <Button size="icon" variant="outline">
        <Plus color="green" size={16} />
      </Button>

      <Button size="icon" variant="outline">
        <RefreshCw color="green" size={16} />
      </Button>
    </div>
  </div>

  {/* RIGHT SIDE (Download button) */}
  <div className="flex justify-end md:justify-start">
    <Button size="icon" variant="outline">
      <Download color="green" size={16} />
    </Button>
  </div>
</div>

          {/* Responsive table wrapper */}
<div className="overflow-x-auto w-full">
  <table className="w-full text-sm min-w-[600px]">
    <thead>
      <tr className="border-b text-gray-500 text-center">
        <th className="p-3 text-left">Doctor Name</th>
        <th className="p-3">Product Name</th>
        <th className="p-3">Usage Limit</th>
        <th className="p-3">Percentage</th>
        <th className="p-3">Action</th>
      </tr>
    </thead>

    <tbody>
      {specialCoupons.map((item) => (
        <tr key={item.id} className="border-b text-center hover:bg-gray-50">
          <td className="p-3 flex items-center gap-2 text-left whitespace-nowrap">
            <Image 
              src={item.avatar} 
              alt={item.doctorName} 
              width={32} 
              height={32} 
              className="rounded-full" 
            />
            {item.doctorName}
          </td>
          <td className="p-3 whitespace-nowrap">{item.productName}</td>
          <td className="p-3 whitespace-nowrap">{item.usageLimit}</td>
          <td className="p-3 whitespace-nowrap">{item.percentage}</td>
          <td className="p-3 flex justify-center">
            <Image src="/action.png" alt="Action" width={20} height={20} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


          <div className="flex justify-between text-sm text-gray-500 pt-4">
            <p>Rows per page: 5</p>
            <div className="flex gap-2">
              <Button size="icon" variant="outline">{"<"}</Button>
              <Button size="icon" variant="outline">1</Button>
              <Button size="icon" variant="outline">{">"}</Button>
            </div>
          </div>

        </CardContent>
      </Card>

    </div>
  );
}
