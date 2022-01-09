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
        className="text-blue-500 dark:text-orange-500 hover:underline underline-offset-2"
        target="_blank"
        {...otherProps}
      />
    </Link>
  );
}
