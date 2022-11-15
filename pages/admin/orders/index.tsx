import { NextPage } from 'next';
import { Layout } from '../../../components/layout/layout';
import { OrderList } from '../../../components/orders/order-list';

const OrdersPage: NextPage = () => {
  return (
    <Layout>
      <OrderList />
    </Layout>
  );
};

export default OrdersPage;
