import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getDB } from '../../../lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await getDB();
  if (!(client instanceof MongoClient)) {
    res.status(200).json({ message: 'Error connecting to the database.' });
    return;
  }
  if (req.method === 'POST') {
    const { title, tags, image, type } = req.body;
    await client
      .db('adminDB')
      .collection('category')
      .insertOne({ image, title, type, tags });
    await client.close();

    res.status(200).json({ message: 'Success' });
  } else if (req.method === 'GET') {
    const categories = await client
      .db('adminDB')
      .collection('category')
      .find()
      .toArray();
    await client.close();
    res.status(200).json({ message: 'Success', categories });
  }
};

export default handler;
