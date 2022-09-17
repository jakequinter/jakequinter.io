import Link from 'next/link';
import { motion } from 'framer-motion';
import { CaretRight } from 'phosphor-react';

type Props = {
  description: string;
  publishedAt: string;
  slug: string;
  title: string;
};

export default function BlogPost({
  description,
  publishedAt,
  slug,
  title,
}: Props) {
  return (
    <Link href={slug} passHref>
      <motion.div
        className="flex justify-between items-center bg-white dark:bg-black rounded-lg p-4 hover:cursor-pointer shadow-md"
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex flex-col justify-between truncate">
          <h2 className="font-medium text-gray-900 dark:text-gray-50">
            {title}
          </h2>

          <p className="text-xs font-light text-gray-500 dark:text-gray-800">
            {publishedAt}
          </p>

          <p className="font-light pt-4 text-sm pr-8 truncate">{description}</p>
        </div>
        <a target="_blank">
          <CaretRight className="text-gray-500 dark:text-gray-800" />
        </a>
      </motion.div>
    </Link>
  );
}
