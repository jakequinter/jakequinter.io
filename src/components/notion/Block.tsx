import React from 'react';
import Prism from 'prismjs';

import Text from './Text';

type Props = {
  block: any;
};

export default function Block({ block }: Props) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { type } = block;
  const value = block[type];
  if (type === 'paragraph') {
    return (
      <p className="mb-4">
        <Text text={value.text} />
      </p>
    );
  }
  if (type === 'heading_1') {
    return (
      <h1 className="text-2xl font-bold md:text-4xl mb-4">
        <Text text={value.text} />
      </h1>
    );
  }
  if (type === 'heading_2') {
    return (
      <h2 className="text-xl font-bold md:text-2xl mb-4">
        <Text text={value.text} />
      </h2>
    );
  }
  if (type === 'heading_3') {
    return (
      <h3 className="text-lg font-bold md:text-xl mb-4">
        <Text text={value.text} />
      </h3>
    );
  }
  if (type === 'bulleted_list_item' || type === 'numbered_list_item') {
    return (
      <li className="mb-4">
        <Text text={value.text} />
      </li>
    );
  }
  if (type === 'code') {
    return (
      <pre className="language-javascript rounded p4">
        <code>if (1===1) return true;</code>
      </pre>
    );
  }
  return (
    <p className="bg-red-600 px-4 py-2 mb-4">Not supported yet by Notion API</p>
  );
}
