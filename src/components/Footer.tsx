import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="max-w-screen-sm border-t border-zinc-300 dark:border-zinc-700 px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 my-8 gap-0 md:gap-4">
        <div className="flex flex-col space-y-4 pb-4 md:pb-0">
          <Link href="/">
            <a className="hover:text-zinc-900 dark:hover:text-zinc-300">Home</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-zinc-900 dark:hover:text-zinc-300">
              About
            </a>
          </Link>
          <Link href="/bookmarks">
            <a className="hover:text-zinc-900 dark:hover:text-zinc-300">
              Bookmarks
            </a>
          </Link>
          <Link href="/bookshelf">
            <a className="hover:text-zinc-900 dark:hover:text-zinc-300">
              Bookshelf
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 pb-4 md:pb-0">
          <Link href="/blog">
            <a className="hover:text-zinc-900 dark:hover:text-zinc-300">Blog</a>
          </Link>
          <Link href="/food">
            <a className="hover:text-zinc-900 dark:hover:text-zinc-300">Food</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-zinc-900 dark:hover:text-zinc-300">
              Contact
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 pb-4 md:pb-0">
          <Link href="https://github.com/jakequinter">
            <a className="hover:text-zinc-900 dark:hover:text-zinc-300">
              GitHub
            </a>
          </Link>
          <Link href="https://twitter.com/jakequinter">
            <a className="hover:text-zinc-900 dark:hover:text-zinc-300">
              Twitter
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/jake-quinter-b9731915b/">
            <a className="hover:text-zinc-900 dark:hover:text-zinc-300">
              LinkedIn
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
