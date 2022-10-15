// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GetAllResponse } from '../../common/types'
import { getDb } from '../../server/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetAllResponse>
) {
  res.status(200).json({
    items: (await getDb()).data.items,
  });
}
