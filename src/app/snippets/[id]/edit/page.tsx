import React from 'react';

export default function SnippetEditPage(props: PageProps) {
  const id = Number(props.params.id);

  return (
    <div>
      <h1 className="text-xl bold">
        Edit Snippet
        {' '}
        {id}
      </h1>
    </div>
  );
}
