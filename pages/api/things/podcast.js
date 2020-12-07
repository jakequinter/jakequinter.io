import { getAllPodcastThings } from '@/lib/db-admin';

export default async (_, res) => {
  try {
    const { things } = await getAllPodcastThings();

    res.status(200).json({ things });
  } catch (error) {
    res.status(500).json({ error });
  }
};
