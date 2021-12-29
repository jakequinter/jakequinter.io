import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.bookmark.findMany({
      where: {
        userId: process.env.USER_ID
      }
    });
  
    res.status(200).json(result); 
  } catch (error) {
    res.status(500).send({message: 'Server Error'});
  }
}