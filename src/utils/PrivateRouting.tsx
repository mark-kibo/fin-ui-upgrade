import Loading from '@/components/loading';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { JSX, ReactComponentElement, useEffect, useState } from 'react';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
   
    const router = useRouter();

    useEffect(() => {
      // console.log(session)
      const user = localStorage.getItem("token")
      // Check if user is authenticated and redirect if not
      if (!user) {
        router.push('/login');
      }
    }, [router]);

    // if (!user) {
    //   // You can render a loading component or an alternative UI here
    //   return <Loading />;
    // }

    // Render the wrapped component if the user is authenticated
    return <WrappedComponent {...props} />;
  };

  // Note that getInitialProps is not needed in newer Next.js versions
  // It's typically used for data fetching in older versions.

  return WithAuth;
};

export default withAuth;
