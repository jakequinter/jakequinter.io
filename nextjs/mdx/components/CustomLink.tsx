import Link from 'next/link';

type Props = {
  as: string;
  href: string;
};

export default function CustomLink({ as, href, ...otherProps }: Props) {
  return (
    <Link as={as} href={href} legacyBehavior>
      <a
        className="font-medium text-gray-900 underline-offset-2 hover:underline"
        target="_blank"
        {...otherProps}
      />
    </Link>
  );
}
