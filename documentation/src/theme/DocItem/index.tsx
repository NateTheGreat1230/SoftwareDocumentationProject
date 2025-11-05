import React from 'react';
import OriginalDocItem from '@theme-original/DocItem';

/**
 * Wrapper around the default DocItem component to add author support.
 */
export default function DocItem(props) {
  const { content: DocContent } = props;
  const { frontMatter } = DocContent;
  const author = frontMatter?.author;

  return (
    <>
      {/* Render the normal doc content */}
      <OriginalDocItem {...props} />

      {/* Render author info if provided */}
      {author && author.length > 0 && (
        <div className='margin-top--md author_section'>
          <strong>Author:</strong>
          <span> {typeof author === 'string' ? author : author[0]}</span>
        </div>
      )}
    </>
  );
}
