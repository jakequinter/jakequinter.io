import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';

import { options } from '@/pages/api/auth/[...nextauth]';
import { prisma } from '@/lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, options);
  const token = req.headers.authorization;

  if (req.method === 'GET') {
    try {
      const food = await prisma.food.findMany({
        select: {
          id: true,
          restaurantName: true,
          jakeRating: true,
          jenRating: true,
          link: true,
          image: true,
        },
        where: {
          userId: process.env.USER_ID,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      res.status(200).json(food);
    } catch (error) {
      res.status(500).send({ message: 'Server Error' });
    }
  }

  if (req.method === 'POST') {
    const { restaurantName, jakeRating, jenRating, link, image } = req.body;

    if (!token && (!session || session.user?.email !== process.env.NEXT_PUBLIC_USER_EMAIL)) {
      res.status(401).send({ message: 'Unauthenticated' });
    }

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
