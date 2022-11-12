import { prisma } from 'lib/prisma';

export async function getFood() {
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

  return food;
}
