import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <h1 className="text-red-500">Website 3.0</h1>
    </main>
  );
}
