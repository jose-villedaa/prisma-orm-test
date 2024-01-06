'use server';

import React from 'react';
import { notFound } from 'next/navigation';
import { db } from '@/db';
import Link from 'next/link';
import Code from '@/components/Code';
import * as serverActions from '@/actions';

export default async function SnippetShowPage(props: PageProps<string>) {
  const snippetId = Number(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: {
      id: snippetId,
    },
  });

  if (!snippet) {
    return notFound();
  }

  const DeleteSnippetAction = serverActions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link className="p-2 border rounded" href={`/snippets/${snippet.id}/edit`}>
            Edit
          </Link>

          <form action={DeleteSnippetAction}>
            <button className="p-2 border rounded" type="submit">
              Delete
            </button>
          </form>
        </div>
      </div>
      <Code code={snippet.code} />
    </div>
  );
}
