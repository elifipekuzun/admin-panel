import { NextPage, GetServerSideProps } from 'next';
import { Layout } from '../../../components/layout/layout';
import { AddCategoryForm } from '../../../components/category/add-category-form';
import { ObjectId, MongoClient } from 'mongodb';
import { getDB } from '../../../lib/db';
import { ICategory } from '../../../lib/types';

interface Props {
  category?: ICategory;
}

const AddCategoryPage: NextPage<Props> = ({ category }) => {
  return (
    <Layout>
      <AddCategoryForm category={category} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (!ctx.query || !ctx.query.categoryId) {
    return {
      props: {},
    };
  }
  const id = ctx.query.categoryId as string;

  const client = await getDB();
  if (!(client instanceof MongoClient)) {
    return {
      props: {},
    };
  }

  const cat = await client
    .db('adminDB')
    .collection('category')
    .findOne({ _id: new ObjectId(id) });
  await client.close();
  const category = { ...cat, _id: cat?._id.toString() };
  return {
    props: { category },
  };
};

export default AddCategoryPage;
