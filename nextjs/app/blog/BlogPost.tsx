'use client';

import Link from 'next/link';
import { CaretRight } from 'phosphor-react';
import { motion } from 'framer-motion';

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
        className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md hover:cursor-pointer"
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="flex flex-col justify-between truncate">
          <h2 className="text-gray-90 font-medium">{title}</h2>

          <p className="text-xs font-light text-gray-500">{publishedAt}</p>

          <p className="truncate pt-4 pr-8 text-sm font-light">{description}</p>
        </div>

        <CaretRight className="text-gray-500" />
      </motion.div>
    </Link>
  );
}
