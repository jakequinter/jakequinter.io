import { ArrowRight, ArrowLeft } from 'phosphor-react';
import { motion } from 'framer-motion';

import { Book } from '@/types/rss';
import { Food } from '@/types/food';

type Props = {
  data: Book[] | Food[];
  page: number;
  setPage: (page: number) => void;
};

const leftArrow = {
  hover: {
    x: -2,
  },
};

const rightArrow = {
  hover: {
    x: 2,
  },
  disabled: {
    x: 0,
  },
};

export default function Pagination({ data, page, setPage }: Props) {
  if (data.length <= 10) {
    return null;
  }

  const determineResults = () => {
    if (data.slice((page - 1) * 10, page * 10).length === 10) {
      return `${(page - 1) * 10 + 1} – ${page * 10}`;
    }

    if (page === Math.ceil(data.length / 10)) {
      return `${(page - 1) * 10 + 1} – ${data.length}`;
    }

    return `${(page - 1) * 10 + 1} – ${
      (page + page) * data.slice((page - 1) * 10).length
    }`;
  };

  const handlePrevious = () => {
    setPage(page - 1);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="mt-4 flex items-center justify-between text-sm">
      <p>
        {determineResults()} of {data.length} results
      </p>

      <div className="flex space-x-4">
        <motion.button
          whileHover="hover"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-3 py-1.5 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={page === 1}
          onClick={handlePrevious}
        >
          <motion.span variants={leftArrow}>
            <ArrowLeft />
          </motion.span>
          Previous
        </motion.button>
        <motion.button
          whileHover="hover"
          className="inline-flex items-center justify-center gap-2  rounded-lg bg-gray-800 px-3 py-1.5 text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={page === Math.ceil(data.length / 10)}
          onClick={handleNext}
        >
          Next
          <motion.span variants={rightArrow}>
            <ArrowRight />
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}
