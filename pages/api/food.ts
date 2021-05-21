import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllFood } from '@/lib/db-admin';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const food = await getAllFood();

    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ error });
  }
};
