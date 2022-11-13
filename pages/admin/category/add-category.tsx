import { NextPage } from 'next';
import { Layout } from '../../../components/layout/layout';
import { AddCategoryForm } from '../../../components/category/add-category-form';

const AddCategoryPage: NextPage = () => {
  return (
    <Layout>
      <AddCategoryForm />
    </Layout>
  );
};

export default AddCategoryPage;
