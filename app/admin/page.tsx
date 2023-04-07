import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';

import { options } from '@/pages/api/auth/[...nextauth]';
import FoodForm from './FoodForm';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Jake Quinter | Admin',
  description: 'Admin page for Jake Quinter.',
};

export default async function Admin() {
  const session = await getServerSession(options);

  if (session && session.user?.email === process.env.NEXT_PUBLIC_USER_EMAIL) {
    return <FoodForm />;
  }

  return <LoginForm />;
}
