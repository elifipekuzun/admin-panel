import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoClient } from 'mongodb';
import { getDB } from '../../../lib/db';
import { comparePasswords } from '../../../lib/auth';

export default NextAuth({
  secret: 'JWT_SECRET_KEY',
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { type: 'email', label: 'Email' },
        password: { type: 'password', label: 'Password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error('Email and password are required!');
        }
        const db = await getDB();
        if (!(db instanceof MongoClient)) {
          throw new Error('Could not be connected to database!');
        }
        const user = await db
          .db('adminDB')
          .collection('users')
          .findOne({ email: credentials.email });
        if (!user || !user._id) {
          await db.close();
          throw new Error('User not exist!');
        }
        const result = await comparePasswords(
          credentials.password,
          user.password
        );
        if (!result) {
          await db.close();
          throw new Error('Wrong password!');
        }
        await db.close();
        return {
          email: credentials.email,
          id: user._id.toString(),
          name: user.name,
        };
      },
    }),
  ],
});
