// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@database/connection';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { database } = await connectToDatabase();
  const collection = database?.collection('skills');
  const rs = await collection?.findOne({ skill: 'JavaScript' });
  console.log(rs)
  res.status(200).json({ name: 'John Doe' });
}
