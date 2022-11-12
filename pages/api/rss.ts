import type { NextApiRequest, NextApiResponse } from 'next';

import { getReadngContent } from 'lib/rss';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const rss = await getReadngContent();

      res.status(200).json(rss);
    } catch (error) {
      res.status(500).send({ message: 'Server Error' });
    }
  }
}
