import { NextPage, GetStaticProps } from 'next';
import { Layout } from '../../../components/layout/layout';
import { ProductForm } from '../../../components/products/product-form';
import { ICategory } from '../../../lib/types';

const AddProductPage: NextPage<{ categories: ICategory[] }> = ({
  categories,
}) => {
  return (
    <Layout>
      <ProductForm categories={categories} />
    </Layout>
  );
};

export default AddProductPage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/auth/add', {
    method: 'GET',
  });
  const data = await response.json();
  if (data.message !== 'Success') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      categories: data.categories,
    },
  };
};
