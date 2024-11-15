// pages/api/students.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getStudentsByYearAndSemester } from '../../lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { year, semester } = req.query;

  try {
    const students = await getStudentsByYearAndSemester(year as string, semester as string);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};
