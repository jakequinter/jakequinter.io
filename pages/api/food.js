import { getAllFood } from '@/lib/db-admin';

export default async (req, res) => {
  try {
    const { food } = await getAllFood();

    res.status(200).json({ food });
  } catch (error) {
    res.status(500).json({ error });
  }
};
