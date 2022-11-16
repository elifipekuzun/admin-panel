import { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from '../../../lib/db';
import { MongoClient } from 'mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await getDB();
  if (!(client instanceof MongoClient)) {
    res.status(500).json({ message: 'Failed to connect to the database.' });
    return;
  }
  if (req.method === 'POST') {
    const {
      image,
      title,
      description,
      price,
      discountAmount,
      parentCategory,
      categoryType,
      tags,
    } = req.body;
    await client.db('adminDB').collection('products').insertOne({
      image,
      title,
      price,
      description,
      discountAmount,
      parentCategory,
      categoryType,
      tags,
    });
    await client.close();
    res.status(200).json({ message: 'Success' });
  } else if (req.method === 'GET') {
    const productsArray = await client
      .db('adminDB')
      .collection('products')
      .find()
      .toArray();
    const products = productsArray.map((p) => {
      return { ...p, _id: p._id.toString() };
    });
    res.status(200).json({ message: 'Success', products });
  }
};

export default handler;
