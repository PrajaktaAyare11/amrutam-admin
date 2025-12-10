'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { NextPage } from 'next'; // Recommended for Next.js pages/components

// Define the component type explicitly
const Home: NextPage = () => {
  // useRouter returns an object with methods, the type is inferred correctly here.
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    // localStorage returns string or null, so 'user' will be string | null
    const user = localStorage.getItem('user');

    if (user) {
      // TypeScript infers the methods like push exist on the router object.
      router.push('/dashboard/affiliate');
    } else {
      router.push('/login');
    }
  }, [router]); // The dependency array is correct

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
    </div>
  );
};

export default Home;