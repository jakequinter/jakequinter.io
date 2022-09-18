import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

import Container from '@/components/layout/Container';
import { Code, P } from '@/components/mdx/Text';
import { H1, H2, H3 } from '@/components/mdx/Heading';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import { UL, LI } from '@/components/mdx/ListItem';
import CustomLink from '@/components/mdx/CustomLink';
import determineTheme from '@/utils/determineTheme';

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
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className="text-javascript text-left p-2 overflow-auto text-xs rounded-md"
          style={style}
        >
          {tokens.map((line, i) => (
            <div
              // @ts-ignore
              className="table-row"
              key={i}
              {...getLineProps({ line, key: i })}
            >
              <span className="table-row">
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

export default function Post({ source, frontMatter, readingTime }: Props) {
  const router = useRouter();

  const date = new Date(frontMatter.publishedAt);
  const formattedDate = new Date(
    date.valueOf() + date.getTimezoneOffset() * 60 * 1000
  );

  return (
    <Container>
      <NextSeo
        title={`${frontMatter.title}`}
        canonical={`https://jakequinter.io/${frontMatter.slug}`}
        openGraph={{
          url: `https://jakequinter.io/${frontMatter.slug}`,
          title: `${frontMatter.title}`,
        }}
      />
      <div className="max-w-screen-sm mx-auto px-4 md:px-0">
        <div className="mb-8">
          <h1 className="text-gray-900 dark:text-gray-50 text-2xl font-bold">
            {frontMatter.title}
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-800">
            {format(formattedDate, 'PP')} • {readingTime.text}
          </p>
        </div>
        <main className="mb-8">
          {/*  @ts-ignore */}
          <MDXRemote {...source} components={components} />
        </main>
      </div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      readingTime: readingTime(content),
    },
  };
};
