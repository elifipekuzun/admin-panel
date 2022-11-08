import { useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Layout } from '../../components/layout/layout';

const AdminHomePage: NextPage = () => {
  // const { status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === 'unauthenticated') {
  //     router.replace('/');
  //   }
  // }, [status]);

  // if (status === 'loading') {
  //   return (
  //     <div className="text-center w-screen">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <Layout>
      <div></div>
    </Layout>
  );
};

export const getServerSidesProps: GetServerSideProps = async () => {
  const session = await getSession();
  console.log('Session:', session);

  if (!session || !session.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AdminHomePage;
