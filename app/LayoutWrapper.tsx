'use client';

import { ThemeProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

export default function LayoutWrapper({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
