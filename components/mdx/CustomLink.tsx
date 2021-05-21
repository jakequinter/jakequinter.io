import { link } from '@/styles/link';
import Link from 'next/link';

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <Link as={as} href={href}>
      <a className={link()} target="_blank" {...otherProps} />
    </Link>
  );
}
