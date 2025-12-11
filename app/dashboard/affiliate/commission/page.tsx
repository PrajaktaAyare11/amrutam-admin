"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Download, Plus, RefreshCw, Upload } from "lucide-react";
import Image from "next/image";
import { specialCommissions } from "@/lib/data";
import CustomToggle from "@/components/ui/toggle";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CommissionPage() {
  //const [enabled, setEnabled] = useState(true);
  const [productEnabled, setProductEnabled] = useState(true);
  const [doctorEnabled, setDoctorEnabled] = useState(true);

  const router = useRouter();

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
        {/* Floating Label */}
        <div className="absolute -top-2.5 left-3 z-10">
          <span className="bg-white px-1 text-xs font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </span>
        </div>

        {/* Select Wrapper */}
        <div className="h-[50px]">
          {children}
        </div>
      </div>
    );
  };


  return (
    <div className="p-6 bg-[#F7F8FA] min-h-screen">
      
      {/* ✅ Breadcrumb + Action */}
      <div
        className="
          flex flex-col gap-3 mb-6
          md:flex-row md:items-center md:justify-between
        "
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <span
            className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
            onClick={() => router.push("/dashboard/affiliate")}
          >
            Affiliate
          </span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span
            className="text-green-800 hover:text-gray-900 font-semibold"
            onClick={() => router.push("/dashboard/affiliate/commission")}
          >
            Commission
          </span>
        </div>

        {/* Button - full width on mobile */}
        <Button
          className="
            bg-[#3A643B] hover:bg-[#173E22] 
            w-full md:w-auto    /* full width on small screens */
            py-3 md:py-2        /* bigger tap area on mobile */
            text-sm font-medium
          "
          onClick={() => router.push("/dashboard/affiliate/commission/add")}
        >
          Add Special Commission
        </Button>
      </div>


      {/* ✅ Default Product Commission */}
      <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Default Product Commission</h3>
          
            <CustomToggle 
              enabled={productEnabled} 
              onChange={() => setProductEnabled(!productEnabled)} 
            />
      </div>
      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <FloatingSelectField
              label="Product"
              required
              placeholder="Please Select a Product"
            >
              <Select>
                <SelectTrigger className="w-full h-[50px] bg-white border border-gray-300 rounded-md text-sm text-gray-500 pt-2">
                  <SelectValue placeholder="Please Select a Product" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Products</SelectItem>
                </SelectContent>
              </Select>
            </FloatingSelectField>

            <FloatingSelectField
              label="Percentage"
              required
              placeholder="Please select a Percentage"
            >
              <Select>
                <SelectTrigger className="w-full h-[50px] bg-white border border-gray-300 rounded-md text-sm text-gray-500 pt-2">
                  <SelectValue placeholder="Please select a Percentage" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="10">10%</SelectItem>
                  <SelectItem value="20">20%</SelectItem>
                  <SelectItem value="30">30%</SelectItem>
                </SelectContent>
              </Select>
            </FloatingSelectField>

          </div>


          <div className="flex justify-end">
            <Button className="bg-[#3A643B] text-white w-30 h-8 text-sm sm:text-base sm:px-6 rounded-md">Update</Button>
          </div>
        </CardContent>
      </Card>

      {/* ✅ Default Doctor Commission */}
      <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Default Doctor Commission</h3>
            <CustomToggle 
              enabled={doctorEnabled} 
              onChange={() => setDoctorEnabled(!doctorEnabled)} 
            />
          </div>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <FloatingSelectField
              label="Doctor"
              required
              placeholder="Please Select a Doctor"
            >
              <Select>
                <SelectTrigger className="w-full h-[50px] bg-white border border-gray-300 rounded-md text-sm text-gray-500 pt-2">
                  <SelectValue placeholder="Please Select a Doctor" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Doctors</SelectItem>
                </SelectContent>
              </Select>
            </FloatingSelectField>

            <FloatingSelectField
              label="Percentage"
              required
              placeholder="Please select a Percentage"
            >
              <Select>
                <SelectTrigger className="w-full h-[50px] bg-white border border-gray-300 rounded-md text-sm text-gray-500 pt-2">
                  <SelectValue placeholder="Please select a Percentage" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="10">10%</SelectItem>
                  <SelectItem value="20">20%</SelectItem>
                  <SelectItem value="30">30%</SelectItem>
                </SelectContent>
              </Select>
            </FloatingSelectField>

          </div>


          <div className="flex justify-end">
              <button
                className="bg-[#3A643B] text-white w-30 h-8 text-sm sm:text-base sm:px-6 rounded-md"
                aria-label="Update Commission"
              >
                Update
              </button>
            </div>
        </CardContent>
      </Card>

      {/* ✅ Special Commission Table */}
      <Card>
        <CardContent className="p-4 space-y-2">

          <div className="
  flex flex-wrap gap-3 justify-between items-center
  md:flex-nowrap md:gap-4
">
  {/* LEFT GROUP */}
  <div className="flex flex-wrap gap-3 items-center">
    <h3 className="font-semibold">Special Commissions</h3>

    {/* Search Bar */}
    <div className="
      flex items-center bg-gray-100 rounded-md p-2
      w-full sm:w-[240px]
    ">
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
        aria-label="Search special commission"
        className="
          flex-1 bg-transparent outline-none text-sm px-2 
          poppins-medium placeholder-[#28643B4D] text-[#28643B4D] 
          focus:text-[#333548BF]
        "
      />
    </div>

    {/* Buttons */}
    <Button className="bg-gray-100" size="icon" variant="outline">
      <Plus color="green" size={16} />
    </Button>

    <Button className="bg-gray-100" size="icon" variant="outline">
      <RefreshCw color="green" size={16} />
    </Button>
  </div>

  {/* RIGHT */}
  <Button className="bg-gray-100" size="icon" variant="outline">
    <Download color="green" size={16} />
  </Button>
</div>




          <div className="overflow-auto">
            <table className="w-full mt-4 text-sm">
              <thead>
                <tr className="border-b text-gray-500 ">
                  <th className="text-left p-3">Doctor Name</th>
                  <th className="text-center p-3">Doctor’s Commission</th>
                  <th className="text-center p-3">Product Name</th>
                  <th className="text-center p-3">Product’s Commission</th>
                  <th className="text-center p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {specialCommissions.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50 items-center text-center">
                    
                    <td className="p-3 flex items-center justify-items-normal gap-2">
                      <Image
                        src={item.avatar}
                        alt={item.doctorName}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      {item.doctorName}
                    </td>

                    <td className="p-3 text-center ">{item.doctorCommission}</td>
                    <td className="p-3">{item.productName}</td>
                    <td className="p-3">{item.productCommission}</td>

                    <td className="p-3 flex justify-center cursor-pointer">
                      <Image  
                        src="/action.png"
                        alt="Delete Icon"
                        width={20}  
                        height={20}
                      />
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 pt-4">
            <p>Rows per page: 5</p>
            <div className="flex items-center gap-2">
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
