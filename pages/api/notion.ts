import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });

  res.status(200).json(response);
}