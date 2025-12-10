// src/pages/dashboard/affiliate/Sales.tsx
"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Search, Filter, Download, Calendar } from 'lucide-react';

interface Sale {
  id: string;
  orderId: string;
  doctorName: string;
  productName: string;
  quantity: number;
  amount: number;
  commission: number;
  date: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export default function Sales() {
  const [searchTerm, setSearchTerm] = useState('');

  const sales: Sale[] = [
    {
      id: '1',
      orderId: 'ORD-2024-001',
      doctorName: 'Dr. Alina Mathew',
      productName: 'Nari Sandarya Malt',
      quantity: 2,
      amount: 2400,
      commission: 720,
      date: '2024-02-15',
      status: 'completed'
    },
    {
      id: '2',
      orderId: 'ORD-2024-002',
      doctorName: 'Dr. Jack Rock',
      productName: 'Jhirgajaj Hair Therapy',
      quantity: 1,
      amount: 1800,
      commission: 540,
      date: '2024-02-14',
      status: 'completed'
    },
    {
      id: '3',
      orderId: 'ORD-2024-003',
      doctorName: 'Dr. Sapna Kumar',
      productName: 'Lozenge Malt',
      quantity: 3,
      amount: 3600,
      commission: 1080,
      date: '2024-02-14',
      status: 'pending'
    },
    {
      id: '4',
      orderId: 'ORD-2024-004',
      doctorName: 'Dr. Alina Mathew',
      productName: 'Nari Sandarya Malt',
      quantity: 1,
      amount: 1200,
      commission: 360,
      date: '2024-02-13',
      status: 'completed'
    },
    {
      id: '5',
      orderId: 'ORD-2024-005',
      doctorName: 'Dr. Rahav Patel',
      productName: 'Joint Pain Oil',
      quantity: 2,
      amount: 2800,
      commission: 840,
      date: '2024-02-12',
      status: 'completed'
    },
    {
      id: '6',
      orderId: 'ORD-2024-006',
      doctorName: 'Dr. Jack Rock',
      productName: 'Digestive Powder',
      quantity: 1,
      amount: 1500,
      commission: 450,
      date: '2024-02-11',
      status: 'cancelled'
    }
  ];

  const filteredSales = sales.filter(
    (sale) =>
      sale.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRevenue = sales.reduce((sum, sale) => sum + sale.amount, 0);
  const totalCommission = sales.reduce((sum, sale) => sum + sale.commission, 0);
  const completedSales = sales.filter(s => s.status === 'completed').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Affiliate Sales
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Track all affiliate sales and commissions
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Date Range</span>
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <Card className="shadow-sm border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">
                ₹{totalRevenue.toLocaleString()}
              </h3>
              <p className="text-xs text-green-600 mt-1">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Total Commission</p>
              <h3 className="text-2xl font-bold text-gray-900">
                ₹{totalCommission.toLocaleString()}
              </h3>
              <p className="text-xs text-blue-600 mt-1">30% commission rate</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Completed Sales</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {completedSales}
              </h3>
              <p className="text-xs text-purple-600 mt-1">Out of {sales.length} total</p>
            </CardContent>
          </Card>
        </div>

        {/* Sales Table */}
        <Card className="shadow-sm">
          <CardHeader className="border-b bg-gray-50/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle className="text-lg font-semibold">
                Recent Sales
              </CardTitle>
              <div className="flex items-center gap-3">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search sales..."
                    className="pl-10 bg-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/50">
                    <TableHead className="font-semibold">Order ID</TableHead>
                    <TableHead className="font-semibold">Doctor Name</TableHead>
                    <TableHead className="font-semibold">Product</TableHead>
                    <TableHead className="font-semibold">Qty</TableHead>
                    <TableHead className="font-semibold">Amount</TableHead>
                    <TableHead className="font-semibold">Commission</TableHead>
                    <TableHead className="font-semibold">Date</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSales.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                        No sales found matching your search
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredSales.map((sale) => (
                      <TableRow key={sale.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium text-blue-600">
                          {sale.orderId}
                        </TableCell>
                        <TableCell>{sale.doctorName}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          {sale.productName}
                        </TableCell>
                        <TableCell>{sale.quantity}</TableCell>
                        <TableCell className="font-semibold">
                          ₹{sale.amount.toLocaleString()}
                        </TableCell>
                        <TableCell className="font-semibold text-green-600">
                          ₹{sale.commission.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-gray-600">
                          {new Date(sale.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(sale.status)}>
                            {sale.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t gap-4">
              <p className="text-sm text-gray-600">
                Showing {filteredSales.length} of {sales.length} sales
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}