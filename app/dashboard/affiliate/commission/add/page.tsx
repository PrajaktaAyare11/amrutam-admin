// src/app/dashboard/affiliate/commission/add/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronRight } from 'lucide-react';

export default function AddSpecialCommission() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    product: '',
    productPercentage: '',
    doctor: '',
    doctorPercentage: '',
  });

  const products = [
    'Nari Sandarya Malt'
  ];

  const doctors = [
    'Dr. Alina Mathew',
    'Dr. Jack Rock',
    'Dr. Ananya Sharma',
    'Dr. Arjun Patel',
  ];

  const percentages = [10, 15, 20, 25, 30, 35, 40, 45, 50];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    router.push('/dashboard/affiliate/commission');
  };

  // Reusable Select Field Component with Integrated Label
  const SelectField = ({
    label,
    required = false,
    placeholder,
    value,
    onValueChange,
    options,
  }: {
    label: string;
    required?: boolean;
    placeholder: string;
    value: string;
    onValueChange: (value: string) => void;
    options: any[];
  }) => {
    return (
      <div className="relative">
        {/* Integrated Label */}
        <div className="absolute -top-2.5 left-3 z-10">
          <span className="bg-white px-1 text-xs font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </span>
        </div>

        {/* Select */}
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger className="w-full h-[50px] bg-white border border-gray-300 rounded-md text-sm text-gray-500 hover:border-gray-400 focus:border-gray-400 focus:ring-0 pt-1">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {options.map((option) => (
              <SelectItem
                key={option}
                value={option.toString()}
                className="text-sm"
              >
                {typeof option === 'number' ? `${option}%` : option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold" onClick={() => router.push("/dashboard/affiliate")}>  
          Affiliate
        </span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold" onClick={() => router.push("/dashboard/affiliate/commission")}>
          Commission
        </span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-green-800 font-semibold">Special Commission</span>
      </div>

      {/* Page Title */}
      <h1 className="text-[22px] font-semibold text-gray-900">
        Add Special Commission
      </h1>

      {/* Form Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Product and Percentage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Product"
              required
              placeholder="Please Select a Product"
              value={formData.product}
              onValueChange={(value) =>
                setFormData({ ...formData, product: value })
              }
              options={products}
            />

            <SelectField
              label="Percentage"
              required
              placeholder="Please select a Percentage"
              value={formData.productPercentage}
              onValueChange={(value) =>
                setFormData({ ...formData, productPercentage: value })
              }
              options={percentages}
            />
          </div>

          {/* Row 2: Doctor and Percentage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Doctor"
              required
              placeholder="Please select a Doctor"
              value={formData.doctor}
              onValueChange={(value) =>
                setFormData({ ...formData, doctor: value })
              }
              options={doctors}
            />

            <SelectField
              label="Percentage"
              required
              placeholder="Please select a Percentage"
              value={formData.doctorPercentage}
              onValueChange={(value) =>
                setFormData({ ...formData, doctorPercentage: value })
              }
              options={percentages}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              className="bg-[#3A643B] hover:bg-[#2d4f2e] text-white px-12 h-11 rounded-md font-medium shadow-sm"
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}