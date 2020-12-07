import { getAllThings } from '@/lib/db-admin';

export default async (_, res) => {
  try {
    const { things } = await getAllThings();

    res.status(200).json({ things });
  } catch (error) {
    res.status(500).json({ error });
  }
};
