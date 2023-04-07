'use client';

import { JetBrains_Mono } from '@next/font/google';

import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import classNames from '@/utils/classNames';

import Highlight, { defaultProps } from 'prism-react-renderer';
import { MDXRemote } from 'next-mdx-remote';
import { Code, P } from '@/mdx/components/Text';
import { H1, H2, H3 } from '@/mdx/components/Heading';
import { UL, LI } from '@/mdx/components/ListItem';
import CustomLink from '@/mdx/components/CustomLink';

const jetbrainsMono = JetBrains_Mono({ weight: '400', subsets: ['latin'] });

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
      theme={oceanicNext}
      code={props.children.props.children}
      language="jsx"
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classNames(
            jetbrainsMono.className,
            'overflow-auto rounded-md p-2 text-left text-xs'
          )}
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
  source: any;
};

export default function MDX({ source }: Props) {
  return <MDXRemote {...source} components={components} />;
}
