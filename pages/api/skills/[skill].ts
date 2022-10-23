import { NextApiResponse, NextApiRequest } from 'next';
import { connectToDatabase } from '@database/connection';
import { DB_NAME_SKILLS } from 'constants/';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { skill } = req.query;
  try {
    const { database } = await connectToDatabase();
    const collection = database?.collection(DB_NAME_SKILLS);
    const rs = await collection?.findOne({ skill });
    return res.json({ ...rs });
  } catch (e) {
    console.error(e);
    return res.json({
      error: e,
    });
  }
}
