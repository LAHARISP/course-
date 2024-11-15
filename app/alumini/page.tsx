"use client"
import Image from 'next/image';
import React, { useState } from 'react';

interface Student {
    slNo: number;
    usn: string;
    name: string;
}

const AlumniPage: React.FC = () => {
    const [academicYear, setAcademicYear] = useState<string>('');
    const [students, setStudents] = useState<Student[]>([
        { slNo: 1, usn: 'USN001', name: 'John Doe' },
        { slNo: 2, usn: 'USN002', name: 'Jane Smith' },
        // Add more students or fetch dynamically based on academic year selection
    ]);

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedYear = event.target.value;
        setAcademicYear(selectedYear);
        // Optionally, fetch students based on selectedYear
        console.log("Selected Academic Year:", selectedYear);
    };

    const viewDetails = (usn: string) => {
        alert(`View details for student with USN: ${usn}`);
        // Implement the logic to display student details
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Full width header */}
            <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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

            {/* Alumni Page Content */}
            <main className="py-8">
                <h2 className="text-center text-2xl text-black font-semibold mb-6">Alumni List</h2>

                {/* Dropdown for Academic Year */}
                <div className="flex justify-center mb-6">
                    <select 
                        id="academicYear" 
                        className="px-4 py-2 border rounded-md text-gray-700" 
                        value={academicYear} 
                        onChange={handleYearChange}
                    >
                        <option value="">Select Academic Year</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        {/* Add more years as needed */}
                    </select>
                </div>

                {/* Table for Passed-Out Students */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">SL NO</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">USN</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.usn} className="bg-white hover:bg-gray-100">
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{student.slNo}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{student.usn}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{student.name}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm">
                                        <button 
                                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                                            onClick={() => viewDetails(student.usn)}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default AlumniPage;
