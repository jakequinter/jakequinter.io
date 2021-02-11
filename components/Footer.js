import Link from 'next/link';

const FooterIcon = ({ href, icon }) => (
  <Link href={href}>
    <a className="text-gray-400" target="_blank">
      {icon}
    </a>
  </Link>
);

const Footer = () => (
  <footer className="flex flex-col items-end max-w-4xl mx-auto w-full px-4">
    <hr className="w-full border-1 border-gray-200 mb-8" />
    {/* <NowPlaying /> */}
    <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
      <div className="flex flex-col space-y-4">
        <Link href="/">
          <a className="hover:text-gray-800">Home</a>
        </Link>
        <Link href="/about">
          <a className="hover:text-gray-800">About</a>
        </Link>
        <Link href="/bookmarks">
          <a className="hover:text-gray-800">Bookmarks</a>
        </Link>
        <Link href="/food">
          <a className="hover:text-gray-800">Food</a>
        </Link>
        <Link href="/contact">
          <a className="hover:text-gray-800">Contact</a>
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
        <Link href="https://github.com/jakequinter">
          <a className="hover:text-gray-800" target="_blank">
            GitHub
          </a>
        </Link>
        <Link href="https://twitter.com/jakequinter">
          <a className="hover:text-gray-800" target="_blank">
            Twitter
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/jake-quinter-b9731915b/">
          <a className="hover:text-gray-800" target="_blank">
            LinkedIn
          </a>
        </Link>
        <Link href="mailto:hello@jakequinter.io">
          <a className="hover:text-gray-800" target="_blank">
            Email
          </a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
