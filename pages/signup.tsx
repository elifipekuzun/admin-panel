import { NextPage } from 'next';
import { AuthForm } from '../components/auth-form';

const SignupPage: NextPage = () => {
  return <AuthForm formType="signup" />;
};

export default SignupPage;
