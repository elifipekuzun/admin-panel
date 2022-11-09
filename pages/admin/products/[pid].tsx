import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../../components/layout/layout';

const ProductDetails: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <div>{pid}</div>
    </Layout>
  );
};

export default ProductDetails;
