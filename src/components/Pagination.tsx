import { Book } from '@/types/rss';
import { Food } from '@/types/food';

type Props = {
  data: Book[] | Food[];
  page: number;
  setPage: (page: number) => void;
};

export default function Pagination({ data, page, setPage }: Props) {
  if (data.length <= 10) {
    return null;
  }

  const determineResults = () => {
    if (data.slice((page - 1) * 10, page * 10).length === 10) {
      return `${(page - 1) * 10 + 1} – ${page * 10}`;
    }

    return `${(page - 1) * 10 + 1} – ${
      (page + page) * data.slice((page - 1) * 10, page * 10).length
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
    <div className="flex justify-between items-center mt-8 text-sm">
      <p>
        {determineResults()} of {data.length} results
      </p>

      <div className="space-x-4 flex">
        <button
          className="bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-full disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-800 dark:disabled:bg-opacity-20"
          disabled={page === 1}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-full disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-800 dark:disabled:bg-opacity-20"
          disabled={page === Math.ceil(data.length / 10)}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
