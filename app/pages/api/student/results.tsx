import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sampleData = {
    name: "John Doe",
    usn: "1RV17CS001",
    semester: 6,
    subjects: [
      { name: "Data Structures", code: "CS201", credits: 4, grade: "A", total: 90 },
      { name: "Algorithms", code: "CS202", credits: 3, grade: "B", total: 85 },
      { name: "Operating Systems", code: "CS203", credits: 4, grade: "A", total: 92 }
    ],
    sgpa: 8.5,
    cgpa: 8.2
  };
  res.status(200).json(sampleData);
}
