import {
  BarChart3,
  Users,
  UserCheck,
  Calendar,
  Award,
  Ticket,
  AlertCircle,
  RefreshCw,
} from "lucide-react";


/* ------------------------ DASHBOARD TABS ------------------------ */

export const tabs = ["Today So Far", "Week So Far", "Month So Far", "Custom"];

export const dashboardData = {
  "Today So Far": {
    "Total Coupons Clicks": { 
      value: 90, 
      unit: "/day", 
      trend: 12,
      icon: "/icons/coupons.png"
    },
    "Total Orders": { 
      value: 22, 
      unit: "/day", 
      trend: 8,
      icon: "/icons/orders.png"
    },
    "Total Revenue": { 
      value: 2150, 
      unit: "/day", 
      trend: -4,
      icon: "/icons/revenue.png"
    },
    "Total Doctors": { 
      value: 4, 
      unit: "/day", 
      trend: 10,
      icon: "/icons/doctors.png"
    },
  },

  "Week So Far": {
    "Total Coupons Clicks": { value: 190, unit: "/week", trend: 18, icon: "/icons/coupons.png" },
    "Total Orders": { value: 46, unit: "/week", trend: 12, icon: "/icons/orders.png" },
    "Total Revenue": { value: 3400, unit: "/week", trend: 7, icon: "/icons/revenue.png" },
    "Total Doctors": { value: 5, unit: "/week", trend: 8, icon: "/icons/doctors.png" },
  },

  "Month So Far": {
    "Total Coupons Clicks": { value: 255, unit: "/month", trend: 48, icon: "/icons/coupons.png" },
    "Total Orders": { value: 55, unit: "/month", trend: 41, icon: "/icons/orders.png" },
    "Total Revenue": { value: 5540, unit: "/month", trend: -2, icon: "/icons/revenue.png" },
    "Total Doctors": { value: 5, unit: "/month", trend: 5, icon: "/icons/doctors.png" },
  },

  Custom: {
    "Total Coupons Clicks": { value: 340, unit: "/period", trend: 22, icon: "/icons/coupons.png" },
    "Total Orders": { value: 70, unit: "/period", trend: 15, icon: "/icons/orders.png" },
    "Total Revenue": { value: 7800, unit: "/period", trend: 10, icon: "/icons/revenue.png" },
    "Total Doctors": { value: 7, unit: "/period", trend: 12, icon: "/icons/doctors.png" },
  },
};


/* ------------------------ TOP DOCTORS ------------------------ */

export const topDoctors = [
  {
    name: "Dr. Kavya Rao",
    speciality: "Gynecology + 2",
    trend: 48,
    avatar: "https://i.pravatar.cc/150?img=32",
    color: "bg-purple-100",
  },
  {
    name: "Dr. Ayaan Mehta",
    speciality: "Dermatology + 1",
    trend: 41,
    avatar: "https://i.pravatar.cc/150?img=14",
    color: "bg-blue-100",
  },
  {
    name: "Dr. Pooja Nair",
    speciality: "Nutrition + 3",
    trend: -2,
    avatar: "https://i.pravatar.cc/150?img=47",
    color: "bg-green-100",
  },
];

/* ------------------------ TOP PRODUCTS ------------------------ */

export const topProducts = [
  {
    name: "Amrutam Nari Sandariya Malt",
    image: "/malt1.png",
  },
  {
    name: "Amrutam Bhringraj Hair Therapy",
    image: "/malt2.png",
  },
  {
    name: "Amrutam Lozenge Malt",
    image: "/malt3.png",
  },
];

/* ------------------------ SPECIAL COMMISSIONS ------------------------ */

export const specialCommissions = [
  {
    id: 1,
    doctorName: "Ananya Sharma",
    doctorCommission: "30%",
    productName: "Nari Sandariya Malt",
    productCommission: "30%",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 2,
    doctorName: "Rohan Verma",
    doctorCommission: "25%",
    productName: "Nari Sandariya Malt",
    productCommission: "20%",
    avatar: "https://i.pravatar.cc/150?img=59",
  },
  {
    id: 3,
    doctorName: "Sneha Kulkarni",
    doctorCommission: "28%",
    productName: "Nari Sandariya Malt",
    productCommission: "22%",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 4,
    doctorName: "Arjun Patel",
    doctorCommission: "35%",
    productName: "Nari Sandariya Malt",
    productCommission: "30%",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 5,
    doctorName: "Neha Iyer",
    doctorCommission: "32%",
    productName: "Nari Sandariya Malt",
    productCommission: "25%",
    avatar: "https://i.pravatar.cc/150?img=40",
  },
];

/* ------------------------ SPECIAL COUPONS ------------------------ */

export const specialCoupons = [
  {
    id: 1,
    doctorName: "Ananya Sharma",
    productName: "Nari Sandariya Malt",
    usageLimit: "1",
    percentage: "30%",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    doctorName: "Rohan Verma",
    productName: "Lozenge Malt",
    usageLimit: "10",
    percentage: "20%",
    avatar: "https://i.pravatar.cc/150?img=21",
  },
  {
    id: 3,
    doctorName: "Sneha Kulkarni",
    productName: "Hair Therapy Oil",
    usageLimit: "5",
    percentage: "25%",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    id: 4,
    doctorName: "Arjun Patel",
    productName: "Nari Sandariya Malt",
    usageLimit: "20",
    percentage: "35%",
    avatar: "https://i.pravatar.cc/150?img=41",
  },
  {
    id: 5,
    doctorName: "Neha Iyer",
    productName: "Lozenge Malt",
    usageLimit: "6",
    percentage: "18%",
    avatar: "https://i.pravatar.cc/150?img=51",
  },
];

/* ------------------------ PAYMENT REQUESTS ------------------------ */

export const allRequests = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=51",
    name: "Isabel Wiza",
    email: "isabel@gmail.com",
    mobile: "+91 8805322849",
    amount: 4290,
    requestedDate: "1 Feb 2024",
    walletAmount: 30000,
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=41",
    name: "Soumya Maheswari",
    email: "soumyam@gmail.com",
    mobile: "+91 8805322850",
    amount: 5290,
    requestedDate: "2 Feb 2024",
    walletAmount: 25000,
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=16",
    name: "Margie O'Reilly",
    email: "margie@gmail.com",
    mobile: "+91 8805322851",
    amount: 4290,
    requestedDate: "3 Feb 2024",
    walletAmount: 28000,
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=13",
    name: "Lucas Legros",
    email: "margie@gmail.com",
    mobile: "+91 8805322851",
    amount: 4290,
    requestedDate: "3 Feb 2024",
    walletAmount: 28000,
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/150?img=15",
    name: "Shannelle Ziemann",
    email: "margie@gmail.com",
    mobile: "+91 8805322851",
    amount: 5290,
    requestedDate: "3 Feb 2024",
    walletAmount: 28000,
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/150?img=14",
    name: "William Stephan",
    email: "margie@gmail.com",
    mobile: "+91 8805322851",
    amount: 5290,
    requestedDate: "3 Feb 2024",
    walletAmount: 28000,
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/150?img=12",
    name: "Smith Birkin",
    email: "margie@gmail.com",
    mobile: "+91 8805322851",
    amount: 5290,
    requestedDate: "3 Feb 2024",
    walletAmount: 28000,
  },
];

/* ------------------------ PAYMENT HISTORY ------------------------ */

export const allRequestsHistory = [
  {
    id: 1,
    name: "Isabel Wiza",
    avatar: "https://i.pravatar.cc/150?img=51",
    email: "isabel@gmail.com",
    mobile: "+91 8805322849",
    amount: 4290,
    requestedDate: "1 Feb 2024",
    walletAmount: 30000,
    status: "Paid",
    approvalDate: "2 Feb 2024",
  },
  {
    id: 2,
    name: "Soumya Maheswari",
    avatar: "https://i.pravatar.cc/150?img=41",
    email: "soumyam@gmail.com",
    mobile: "+91 8805322850",
    amount: 5290,
    requestedDate: "2 Feb 2024",
    walletAmount: 25000,
    status: "Declined",
    approvalDate: "3 Feb 2024",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=16",
    name: "Margie O'Reilly",
    email: "margie@gmail.com",
    mobile: "+91 8805322851",
    amount: 4290,
    requestedDate: "3 Feb 2024",
    walletAmount: 28000,
    status: "Declined",
    approvalDate: "12 Mar 2024",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=13",
    name: "Lucas Legros",
    email: "margie@gmail.com",
    mobile: "+91 8805322851",
    amount: 4290,
    requestedDate: "29 April 2024",
    walletAmount: 28000,
    status: "Declined",
    approvalDate: "15 May 2024",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/150?img=15",
    name: "Shannelle Ziemann",
    email: "margie@gmail.com",
    mobile: "+91 8805322851",
    amount: 5290,
    requestedDate: "3 Feb 2024",
    walletAmount: 28000,
    status: "Paid",
    approvalDate: "11 Nov 2024",
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/150?img=14",
    name: "William Stephan",
    email: "margie@gmail.com",
    mobile: "+91 8805322851",
    amount: 5290,
    requestedDate: "3 Feb 2024",
    walletAmount: 28000,
    status: "Paid",
    approvalDate: "3 Feb 2024",
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/150?img=12",
    name: "Smith Birkin",
    email: "margie@gmail.com",
    mobile: "+91 8805322851",
    amount: 5290,
    requestedDate: "3 Feb 2024",
    walletAmount: 28000,
    status: "Paid",
  },
];

/* ------------------------ SALES DATA ------------------------ */

export const salesData = [
  {
    id: 1,
    product: "Nari Sandariya Malt",
    buyer: "Isabel Wiza",
    email: "isabel@gmail.com",
    mobile: "+91 8805322849",
    amount: 4290,
    date: "1 Feb 2024",
    status: "Completed",
  },
  {
    id: 2,
    product: "Bhringraj Hair Therapy",
    buyer: "Soumya Maheswari",
    email: "soumyam@gmail.com",
    mobile: "+91 8805322850",
    amount: 5290,
    date: "2 Feb 2024",
    status: "Pending",
  },
];

// ✅ AFFILIATE DOCTORS DATA
export const affiliateDoctors = [
  {
    id: 1,
    name: "Dr. Alina Mathew",
    speciality: "Gynecology",
    email: "alinamath@gmail.com",
    mobile: "+91 8805322849",
    totalEarnings: 125000,
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Dr. Jack Rock",
    speciality: "Dermatology",
    email: "jack@gmail.com",
    mobile: "+91 8805322850",
    totalEarnings: 98000,
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Dr. Ananya Sharma",
    speciality: "Pediatrics",
    email: "ananya@gmail.com",
    mobile: "+91 8805322851",
    totalEarnings: 156000,
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    name: "Dr. Arjun Patel",
    speciality: "Orthopedic",
    email: "arjun@gmail.com",
    mobile: "+91 8805322852",
    totalEarnings: 87000,
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
];


// ✅ AFFILIATE DASHBOARD STATS (FOR CARDS)
export const affiliateStats = [
  {
    id: 1,
    title: "Total Coupon Clicks",
    value: 255,
    unit: "/month",
    icon: "/icons/coupons.png",
  },
  {
    id: 2,
    title: "Total Orders",
    value: 55,
    unit: "/month",
    icon: "/icons/orders.png",
  },
  {
    id: 3,
    title: "Total Revenue",
    value: 5540,
    unit: "/month",
    icon: "/icons/revenue.png",
  },
  {
    id: 4,
    title: "Total Doctors",
    value: 5,
    unit: "/month",
    icon: "/icons/doctors.png",
  },
];
export const faqConsumer = {
  Consultation: [
    "What types of consultations are available?",
    "Can I get refund for the wallet money?",
    "What is the Amrutam Forum?",
    "Can I pause the audio consultation?",
    "Can I pause the audio consultation?",
    "Is there a minimum consultation for an audio duration?",
    "Is there a minimum consultation for an audio duration?",
    "How do I schedule a video consultation?",
  ],
  Shop: [],
  Wallet: [],
  Forum: [],
  Additional: [],
};

export const faqDoctor = {
  Consultation: [
    "How do I start consultation?",
    "How do I get paid as a doctor?",
    "Can I cancel ongoing sessions?",
    "Can I get refund for the wallet money?",
    "Can I get refund for the wallet money?",
    "How do I manage my availability?",
    "How do I manage my availability?",
    "What are the technical requirements for video consultations?",
  ],
  Shop: [],
  Wallet: [],
  Forum: [],
  Additional: [],
};
