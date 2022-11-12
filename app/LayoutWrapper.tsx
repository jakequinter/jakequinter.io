'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

export default function LayoutWrapper({ children, ...props }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
