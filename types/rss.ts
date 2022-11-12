export type Book = {
  guid: string;
  creator: string;
  link: string;
  title: string;
  enclosure?: {
    url: string;
  };
};
