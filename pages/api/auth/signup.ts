import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getDB } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';

interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
}
interface ResProps {
  message: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ResProps>) => {
  if (req.method === 'POST') {
    const { name, email, password, role } = req.body as IUser;
    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 6 ||
      name.trim().length < 3
    ) {
      res.status(422).json({
        message:
          'Invalid input - password should also be at least 6 characters long.',
      });
      return;
    }
    const db = await getDB();
    if (!(db instanceof MongoClient)) {
      res
        .status(500)
        .json({ message: db || 'Something went wrong! Please try it later.' });
      return;
    }
    const user = await db.db('adminDB').collection('users').findOne({ email });
    if (user) {
      res.status(200).json({ message: 'This email is already in use.' });
      await db.close();
      return;
    }
    const hashedPassword = await hashPassword(password);
    const result = await db
      .db('adminDB')
      .collection('users')
      .insertOne({ name, email, password: hashedPassword, role });
    console.log(result);

    await db.close();
    res.status(200).json({ message: 'Success' });
  }
};

export default handler;
