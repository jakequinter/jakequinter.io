import { getAllYears } from '@/lib/db-admin';

export default async (_, res) => {
  try {
    const { years } = await getAllYears();

    res.status(200).json({ years });
  } catch (error) {
    res.status(500).json({ error });
  }
};
