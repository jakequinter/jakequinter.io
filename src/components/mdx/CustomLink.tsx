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
        className="text-gray-900 dark:text-gray-50 hover:underline underline-offset-2"
        target="_blank"
        {...otherProps}
      />
    </Link>
  );
}
