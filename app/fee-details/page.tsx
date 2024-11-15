'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface FeeDetails {
  name: string;
  usn: string;
  year: number;
  totalFee: number;
  status: string; // "Paid" or "Unpaid"
}

const FeeDetailsPage: React.FC = () => {
  const [feeDetails, setFeeDetails] = useState<FeeDetails | null>(null);

  // Fetch fee details when the component mounts
  useEffect(() => {
    const fetchFeeDetails = async () => {
      try {
        const response = await axios.get('/api/student/fee'); // Replace with your actual API endpoint
        setFeeDetails(response.data);
      } catch (error) {
        console.error('Error fetching fee details:', error);
      }
    };

    fetchFeeDetails();
  }, []);

  if (!feeDetails) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/DRAIT.jpg"
              alt="Institute Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">Dr. AMBEDKAR INSTITUTE OF TECHNOLOGY</h1>
              <p className="text-sm opacity-90">Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India</p>
            </div>
          </div>
        </div>
      </header>

      {/* Fee Details Content */}
      <main className="py-8 container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-6">Student Fee Details</h2>

        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Student Fee Details */}
          <table className="min-w-full text-left">
            <tbody>
              <tr className="border-b">
                <th className="py-3 px-6 font-medium text-gray-500">Student Name:</th>
                <td className="py-3 px-6 text-gray-700">{feeDetails.name}</td>
              </tr>
              <tr className="border-b">
                <th className="py-3 px-6 font-medium text-gray-500">USN:</th>
                <td className="py-3 px-6 text-gray-700">{feeDetails.usn}</td>
              </tr>
              <tr className="border-b">
                <th className="py-3 px-6 font-medium text-gray-500">Year:</th>
                <td className="py-3 px-6 text-gray-700">{feeDetails.year}</td>
              </tr>
              <tr className="border-b">
                <th className="py-3 px-6 font-medium text-gray-500">Total Fee:</th>
                <td className="py-3 px-6 text-gray-700">₹{feeDetails.totalFee}</td>
              </tr>
              <tr>
                <th className="py-3 px-6 font-medium text-gray-500">Status:</th>
                <td className={`py-3 px-6 font-semibold ${feeDetails.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                  {feeDetails.status}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default FeeDetailsPage;
