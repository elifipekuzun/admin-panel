import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Layout } from '../../../components/layout/layout';
import { CategoryList } from '../../../components/category/category-list';
import { ICategory } from '../../../lib/types';

const CategoryPage = ({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <CategoryList categories={categories} />
    </Layout>
  );
};

export default CategoryPage;

export const getStaticProps: GetStaticProps<{
  categories: ICategory[];
}> = async () => {
  const response = await fetch('http://localhost:3000/api/auth/add', {
    method: 'GET',
  });
  const data = await response.json();
  return {
    props: {
      categories: data.categories,
    },
  };
};
