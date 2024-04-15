import Parser from 'rss-parser';

import { Book } from '@/types/rss';

export const getOkuContent = async () => {
  const parser = new Parser();

  const ocaml = {
    creator: "Michael R. Clarkson et al.",
    guid: "ocaml",
    link: "https://cs3110.github.io/textbook/cover.html",
    title: "OCaml Programming: Correct + Efficient + Beautiful"
  };

  const { items: toRead } = (await parser.parseURL(
    process.env.OKU_TO_READ_URL as string
  )) as unknown as { items: Book[] };
  const { items: currentlyReading } = (await parser.parseURL(
    process.env.OKU_CURRENTLY_READING_URL as string
  )) as unknown as { items: Book[] };
  currentlyReading.push(ocaml);
  const { items: read } = (await parser.parseURL(
    process.env.OKU_READ_URL as string
  )) as unknown as { items: Book[] };

  return { toRead, currentlyReading, read };
};
