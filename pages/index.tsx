import { useEffect } from 'react';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { AuthForm } from '../components/auth-form';
import { ActivityIndicator } from '../components/activity-indicator';

const AuthenticationPage: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/admin');
    }
  }, [status]);

  if (status === 'loading') {
    return <ActivityIndicator />;
  } else {
    return <AuthForm formType="login" />;
  }
};

export default AuthenticationPage;
