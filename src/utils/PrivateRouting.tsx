import Loading from '@/components/loading';
import { useAuth } from '@/context/AuthContext';
import {useRouter} from 'next/navigation';
import { JSX, ReactComponentElement, useEffect, useState } from 'react';

const withAuth = (WrappedComponent: any) => {
  const WithAuth = (props:any) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(true);
  const {token}= useAuth()
  const router = useRouter()

    useEffect(() => {
      // Fetch user data here and set it using setUser
      // For example:
      // setUser(fetchUserData());
      console.log(token)

      setLoading(false);
    }, []);

    useEffect(() => {
      // Check if user is authenticated and redirect if not
      if (!token) {
        router.push('/login');
      }
    }, [token]);

    if (loading) {
      return <Loading/>;
    }

    if (token == null) {
      // Render nothing while redirecting
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuth.getInitialProps = async (ctx: any) => {
    const wrappedComponentInitialProps = WrappedComponent.getInitialProps
      ? await WrappedComponent.getInitialProps(ctx)
      : {};

    return { ...wrappedComponentInitialProps };
  };

  return WithAuth;
};

export default withAuth;
