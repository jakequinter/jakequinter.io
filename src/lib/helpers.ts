import { prisma } from '@/lib/prisma';

export async function getBookmarks() {
  const things = await prisma.bookmark.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      link: true,
      type: true,
    },
    where: {
      userId: process.env.USER_ID
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
  

  return things;
}

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
      userId: process.env.USER_ID
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
  

  return food;
}