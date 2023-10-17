
import Loading from '@/app/loading';
import {useRouter} from 'next/navigation';
import { useEffect, useState } from 'react';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const router = useRouter()

    useEffect(() => {
      // Fetch user data here and set it using setUser
      // For example:
      // setUser(fetchUserData());

      setLoading(false);
    }, []);

    useEffect(() => {
      // Check if user is authenticated and redirect if not
      if (!user) {
        router.push('/login');
      }
    }, [user]);

    if (loading) {
      return <Loading/>;
    }

    if (!user) {
      // Render nothing while redirecting
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuth.getInitialProps = async (ctx) => {
    const wrappedComponentInitialProps = WrappedComponent.getInitialProps
      ? await WrappedComponent.getInitialProps(ctx)
      : {};

    return { ...wrappedComponentInitialProps };
  };

  return WithAuth;
};

export default withAuth;
