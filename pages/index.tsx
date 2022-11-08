import { useEffect } from 'react';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { AuthForm } from '../components/auth-form';

const AuthenticationPage: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/admin');
    }
  }, [status]);

  if (status === 'loading') {
    return (
      <div className="text-center w-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return <AuthForm formType="login" />;
};

export default AuthenticationPage;
