import { NextPage } from 'next';
import { Layout } from '../../components/layout/layout';
import { DashboardOverview } from '../../components/dashboard/dashboard-overview';

const AdminHomePage: NextPage = () => {
  return (
    <Layout>
      <DashboardOverview />
    </Layout>
  );
};

export default AdminHomePage;
