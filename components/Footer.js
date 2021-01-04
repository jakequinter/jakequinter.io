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
  <footer className="pb-2">
    <div className="mx-auto">
      <div className="flex justify-center space-x-6">
        <FooterIcon href="https://github.com/jakequinter" icon={<FiGithub />} />
        <FooterIcon
          href="https://twitter.com/jakequinter"
          icon={<FiTwitter />}
        />
        <FooterIcon
          href="https://www.linkedin.com/in/jake-quinter-b9731915b/"
          icon={<FiLinkedin />}
        />
        <FooterIcon href="mailto:hello@jakequinter.io" icon={<FiMail />} />
      </div>
    </div>
  </footer>
);

export default Footer;
