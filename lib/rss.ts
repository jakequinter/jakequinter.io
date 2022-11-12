import Parser from 'rss-parser';

export const getOKUContent = async () => {
  const parser = new Parser();

  const { items: toRead } = await parser.parseURL(
    process.env.OKU_TO_READ_URL as string
  );
  const { items: currentlyReading } = await parser.parseURL(
    process.env.OKU_CURRENTLY_READING_URL as string
  );
  const { items: read } = await parser.parseURL(
    process.env.OKU_READ_URL as string
  );

  return { toRead, currentlyReading, read };
};
