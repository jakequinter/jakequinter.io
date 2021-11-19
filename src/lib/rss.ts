import Parser from 'rss-parser';

export const getReadngContent = async () => {
  const parser = new Parser();

  const { items } = await parser.parseURL(process.env.OKU_CURRENTLY_READING_URL as string);    
  return items;
};
