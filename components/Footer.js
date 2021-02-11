import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const FooterIcon = ({ href, icon }) => (
  <Link href={href}>
    <a className="text-gray-400" target="_blank">
      {icon}
    </a>
  </Link>
);

const Footer = () => (
  // <footer className="pb-2">
  //   <div className="mx-auto">
  //     <div className="flex justify-center space-x-6">
  //       <FooterIcon href="https://github.com/jakequinter" icon={<FiGithub />} />
  //       <FooterIcon
  //         href="https://twitter.com/jakequinter"
  //         icon={<FiTwitter />}
  //       />
  //       <FooterIcon
  //         href="https://www.linkedin.com/in/jake-quinter-b9731915b/"
  //         icon={<FiLinkedin />}
  //       />
  //       <FooterIcon href="mailto:hello@jakequinter.io" icon={<FiMail />} />
  //     </div>
  //   </div>
  // </footer>
  <footer className="flex flex-col items-end max-w-4xl mx-auto w-full px-4">
    <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
    {/* <NowPlaying /> */}
    <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
      <div className="flex flex-col space-y-4">
        <Link href="/">
          <a className="hover:text-gray-800 transition">Home</a>
        </Link>
        <Link href="/about">
          <a className="hover:text-gray-800 transition">About</a>
        </Link>
        <Link href="/food">
          <a className="hover:text-gray-800 transition">Food</a>
        </Link>
        <Link href="/contact">
          <a className="hover:text-gray-800 transition">Contact</a>
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
        <Link href="https://github.com/jakequinter">
          <a target="_blank">GitHub</a>
        </Link>
        <Link href="https://twitter.com/jakequinter">
          <a target="_blank">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/jake-quinter-b9731915b/">
          <a target="_blank">LinkedIn</a>
        </Link>
        <Link href="mailto:hello@jakequinter.io">
          <a target="_blank">Email</a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
