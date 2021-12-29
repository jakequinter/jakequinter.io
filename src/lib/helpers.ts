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
    }
  });
  

  return things;
}