'use client';

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
        className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md hover:cursor-pointer"
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex flex-col justify-between truncate">
          <h2 className="text-gray-90 font-medium">{title}</h2>

          <p className="text-xs font-light text-gray-500">{publishedAt}</p>

          <p className="truncate pt-4 pr-8 text-sm font-light">{description}</p>
        </div>
        <a target="_blank">
          <CaretRight className="text-gray-500" />
        </a>
      </motion.div>
    </Link>
  );
}
