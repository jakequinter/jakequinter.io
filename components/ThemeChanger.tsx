import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

import { link } from '@/styles/link';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleTheme = () => {
    const targetTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  return (
    <a
      className={link({
        type: 'unactive',
        css: {
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '$gray500',
          padding: '$2',
          borderRadius: '5px',
          // border: 'none',
        },
      })}
      onClick={handleTheme}
    >
      {theme === 'dark' ? (
        <HiOutlineSun size={20} />
      ) : (
        <HiOutlineMoon size={20} />
      )}
    </a>
  );
}
