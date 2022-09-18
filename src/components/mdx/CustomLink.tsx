import { link } from '@/styles/link';
import Link from 'next/link';

type Props = {
  as: string;
  href: string;
};

export default function CustomLink({ as, href, ...otherProps }: Props) {
  return (
    <Link as={as} href={href}>
      <a
        className="text-gray-900 underline-offset-2 hover:underline dark:text-gray-50"
        target="_blank"
        {...otherProps}
      />
    </Link>
  );
}
