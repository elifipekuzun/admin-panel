import { MongoClient } from 'mongodb';

const mongoUrl =
  'mongodb+srv://elifipek:588647elka@cluster0.bmoow.mongodb.net/adminDB?retryWrites=true&w=majority';

export const getDB = async () => {
  try {
    const client = await MongoClient.connect(mongoUrl);
    return client;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};
