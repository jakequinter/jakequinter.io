import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import Block from '../../src/components/notion/Block';
import { Code, P } from '@/components/mdx/Text';
import { H1, H2, H3 } from '@/components/mdx/Heading';
import { line as styleline } from '@/styles/mdx/line';
import { linecontent } from '@/styles/mdx/linecontent';
import { pre } from '@/styles/mdx/pre';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import { UL, LI } from '@/components/mdx/ListItem';
import CustomLink from '@/components/mdx/CustomLink';
import determineTheme from '@/utils/determineTheme';
import Nav from '@/components/layout/Nav';

import { text } from '@/styles/text';
import { box } from '@/styles/box';
import { button } from '@/styles/button';
import {
  getNotionBlocks,
  getNotionDatabase,
  getNotionPage,
} from '@/lib/helpers';
import Container from '@/components/Container';

const components = {
  a: CustomLink,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  li: LI,
  em: Code, // @ts-ignore
  pre: props => (
    <Highlight
      {...defaultProps}
      theme={determineTheme()}
      code={props.children.props.children}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={pre()} style={style}>
          {tokens.map((line, i) => (
            <div
              // @ts-ignore
              className={styleline()}
              key={i}
              {...getLineProps({ line, key: i })}
            >
              <span className={linecontent()}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  ),
};

type Props = {
  source: Source;
  frontMatter: Scope;
  readingTime: ReadingTime;
};

type Source = {
  compileSource: string;
  scope: Scope;
};

type Scope = {
  description: string;
  publishedAt: string;
  slug: string;
  title: string;
};

type ReadingTime = {
  minutes: number;
  text: string;
  time: number;
  words: number;
};

export default function Post({ blocks, page }: Props) {
  const router = useRouter();
  console.log('blocks', blocks);

  return (
    <Container>
      {/* <NextSeo
        title={`${frontMatter.title}`}
        canonical={`https://jakequinter.io/${frontMatter.slug}`}
        openGraph={{
          url: `https://jakequinter.io/${frontMatter.slug}`,
          title: `${frontMatter.title}`,
        }}
      /> */}
      {/* <Nav /> */}
      {blocks.results.map(block => (
        <Block key={block.id} block={block} />
      ))}
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await getNotionDatabase();

  return {
    paths: blogs.results.map(el => ({
      params: {
        blogId: el.id,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { blogId } = context.params;
  const blocks = await getNotionBlocks(blogId);
  const page = await getNotionPage(blogId);

  return {
    props: {
      blocks,
      page,
    },
    revalidate: 3600,
  };
};
