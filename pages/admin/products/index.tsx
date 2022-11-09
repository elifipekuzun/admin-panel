import { NextPage } from 'next';
import { Layout } from '../../../components/layout/layout';
import { ProductList } from '../../../components/products/product-list';

const ProductsPage: NextPage = () => {
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ProductsPage;
