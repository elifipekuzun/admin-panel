import { NextPage, GetStaticProps } from 'next';
import { Layout } from '../../../components/layout/layout';
import { ProductList } from '../../../components/products/product-list';
import { IProduct } from '../../../lib/types';

const ProductsPage: NextPage<{ products: IProduct[] }> = ({ products }) => {
  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
};

export default ProductsPage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/auth/product', {
    method: 'GET',
  });
  const data = await response.json();
  const products = data.products;
  return {
    props: {
      products,
    },
  };
};
