import { Client } from '@notionhq/client';

import { prisma } from '@/lib/prisma';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

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

export async function getNotionBlog() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    sorts: [
      {
        property: 'created_at',
        direction: 'descending',
      },
    ],
  });

  return response;
}