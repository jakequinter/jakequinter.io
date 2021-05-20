import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { format } from 'date-fns';
import readingTime from 'reading-time';

import Header from '@/components/Header';
import CustomLink from '@/components/mdx/CustomLink';
import { H1, H2, H3 } from '@/components/mdx/Heading';
import { Code, P } from '@/components/mdx/Text';
import { UL, LI } from '@/components/mdx/ListItem';
import { line as styleline } from '@/styles/mdx/line';
import { linecontent } from '@/styles/mdx/linecontent';
import { pre } from '@/styles/mdx/pre';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import determineTheme from '@/utils/determineTheme';
import { text } from '@/styles/text';
import { box } from '@/styles/box';
import { button } from '@/styles/button';

const components = {
  a: CustomLink,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  li: LI,
  em: Code,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
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

export default function Post({ source, frontMatter, readingTime }) {
  const router = useRouter();

  const date = new Date(frontMatter.publishedAt);
  const formattedDate = new Date(
    date.valueOf() + date.getTimezoneOffset() * 60 * 1000
  );

  return (
    <>
      <NextSeo
        title={`${frontMatter.title}`}
        canonical={`https://jakequinter.io/${frontMatter.slug}`}
        openGraph={{
          url: `https://jakequinter.io/${frontMatter.slug}`,
          title: `${frontMatter.title}`,
        }}
      />
      <Header />
      <div
        className={box({
          marginTop: '$6',
          marginBottom: '$4',
          maxWidth: '56rem',
          mx: 'auto',
          px: '$3',
          '@bp3': { px: 0 },
        })}
      >
        <button
          onClick={() => router.back()}
          className={button({
            type: 'blog',
            css: {
              display: 'flex',
              alignItems: 'center',
              // paddingLeft: '$2',
            },
          })}
        >
          <HiArrowNarrowLeft
            className={text({
              css: { marginRight: '$2', color: 'inherit' },
            })}
            size={20}
          />
          Back
        </button>
      </div>
      <div
        className={box({
          maxWidth: '42rem',
          mx: 'auto',
          px: '$3',
          '@bp3': { px: 0 },
        })}
      >
        <div className={box({ marginBottom: '$4' })}>
          <h1
            className={text({
              size: '7',
              weight: 'bold',
            })}
          >
            {frontMatter.title}
          </h1>
          <div
            className={box({
              display: 'flex',
              alignItems: 'center',
              paddingTop: '$2',
            })}
          >
            <p className={text({ size: '2' })}>
              {format(formattedDate, 'PP')} • {readingTime.text}
            </p>
          </div>
        </div>
        <main className={box({ marginBottom: '$5' })}>
          <MDXRemote {...source} components={components} />
        </main>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
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

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
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
