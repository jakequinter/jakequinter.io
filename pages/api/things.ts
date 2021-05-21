import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllThings } from '@/lib/db-admin';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const things = await getAllThings();

    res.status(200).json(things);
  } catch (error) {
    res.status(500).json({ error });
  }
};
