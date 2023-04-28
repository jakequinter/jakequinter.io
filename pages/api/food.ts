import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';

import { options } from '@/pages/api/auth/[...nextauth]';
import { prisma } from '@/lib/prisma';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, options);
  const token = req.headers.authorization;

  if (
    !token &&
    (!session || session.user?.email !== process.env.NEXT_PUBLIC_USER_EMAIL)
  ) {
    res.status(401).send({ message: 'Unauthenticated' });
  }

  if (req.method === 'GET') {
    try {
      const result = await prisma.food.findMany({
        where: {
          userId: process.env.USER_ID,
        },
      });

      res.status(200).json(result);
    } catch (error) {
      res.status(500).send({ message: 'Server Error' });
    }
  }

  if (req.method === 'POST') {
    const { restaurantName, jakeRating, jenRating, link, image } = req.body;

    try {
      const result = await prisma.food.create({
        data: {
          userId: token ? token : (session?.id as string),
          restaurantName,
          jakeRating,
          jenRating,
          link,
          image,
        },
      });

      res.status(200).json(result);
    } catch (error) {
      res.status(500).send({ message: 'Server Error' });
    }
  }
}
