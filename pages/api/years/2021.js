import { getAllEntriesByYear } from '@/lib/db-admin';

export default async (_, res) => {
  try {
    const { years } = await getAllEntriesByYear('2021');

    res.status(200).json({ years });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
