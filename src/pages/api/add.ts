// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AddRequest, AddResponse, GetAllResponse } from '../../common/types'
import { getDb } from '../../server/db';
import { v4 as uuid } from 'uuid';

interface ApiRequest extends NextApiRequest {
  body: AddRequest;
}

export default async function handler(
  req: ApiRequest,
  res: NextApiResponse<AddResponse>
) {
  const id = uuid();
  const db = await getDb();
  db.data.items
    .push({
      id: id,
      completed: false,
      message: req.body.message
    });
  await db.write();
  const createResponse: AddResponse = { id };
  res.send(createResponse);
}
