import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@modulz/radix-icons';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(true);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleTheme = () => {
    const targetTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={handleTheme}
      className={
        'relative bg-zinc-200 dark:bg-zinc-700 inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0'
      }
    >
      <span className="sr-only">Change light/dark mode</span>
      <span
        className={`${
          theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
        } pointer-events-none relative inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-500`}
      >
        <span
          className={`
            ${
              theme === 'dark'
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200'
            }
            'absolute bg-zinc-900 border border-zinc-900 rounded-full inset-0 h-full w-full flex items-center justify-center transition-opacity'
          `}
          aria-hidden="true"
        >
          <MoonIcon className="text-sky-400" />
        </span>

        <span
          className={`${
            theme === 'dark'
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100'
          } absolute bg-zinc-900 border border-zinc-900 rounded-full inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <SunIcon className="text-yellow-200" />
        </span>
      </span>
    </Switch>
  );
}
