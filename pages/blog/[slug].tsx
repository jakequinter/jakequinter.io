import { useRouter } from 'next/router';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import path from 'path';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { useTheme } from 'next-themes';

import Container from '@/components/Container';
import CustomLink from '@/components/mdx/CustomLink';
import { H1, H2, H3 } from '@/components/mdx/Heading';
import { line as styleline } from '@/styles/mdx/line';
import { linecontent } from '@/styles/mdx/linecontent';
import { pre } from '@/styles/mdx/pre';
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils';
import determineTheme from '@/utils/determineTheme';

const components = {
  a: CustomLink,
  h1: H1,
  h2: H2,
  h3: H3,
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

export default function Post({ source, frontMatter }) {
  const router = useRouter();

  return (
    <Container>
      <button onClick={() => router.back()}>go back</button>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </Container>
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
    },
  };
};
