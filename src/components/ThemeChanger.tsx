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
  console.log('theme', theme);

  return (
    <Switch
      checked={theme === 'light'}
      onChange={handleTheme}
      className={
        'relative bg-gray-400 dark:bg-darkgray-400 inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0'
      }
    >
      <span className="sr-only">Change light/dark mode</span>
      <span
        className={`${
          theme === 'light' ? 'translate-x-5' : 'translate-x-0'
        } pointer-events-none relative inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-500`}
      >
        <span
          className={`
            ${
              theme === 'light'
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200'
            }
            'absolute bg-gray-900 border border-gray-900 rounded-full inset-0 h-full w-full flex items-center justify-center transition-opacity'
          `}
          aria-hidden="true"
        >
          <SunIcon className="text-[#FFEF5C]" />
        </span>

        <span
          className={`${
            theme === 'light'
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100'
          } absolute bg-gray-900 border border-gray-900 rounded-full inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <MoonIcon className="text-[#2EC8EE]" />
        </span>
      </span>
    </Switch>
  );
}
