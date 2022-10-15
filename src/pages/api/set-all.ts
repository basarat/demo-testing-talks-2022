// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SetAllRequest } from '../../common/types'
import { getDb } from '../../server/db';

interface ApiRequest extends NextApiRequest {
  body: SetAllRequest;
}

export default async function handler(
  req: ApiRequest,
  res: NextApiResponse<{}>
) {
  const db = await getDb();
  db.data.items = req.body.items;
  await db.write();
  res.json({});
}
