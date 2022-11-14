import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';
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
  } else if (req.method === 'PUT') {
    const { title, tags, image, type, _id } = req.body;
    await client
      .db('adminDB')
      .collection('category')
      .findOneAndUpdate(
        { _id: new ObjectId(_id) },
        { $set: { title, tags, image, type } }
      );
    await client.close();
    res.status(200).json({ message: 'Success' });
  } else if (req.method === 'GET') {
    const cats = await client
      .db('adminDB')
      .collection('category')
      .find()
      .toArray();
    const categories = cats.map((item) => {
      return { ...item, _id: item._id.toString() };
    });
    await client.close();
    res.status(200).json({ message: 'Success', categories });
  }
};

export default handler;
