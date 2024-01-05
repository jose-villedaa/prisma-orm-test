import React from 'react';
import { notFound } from 'next/navigation';
import { db } from '@/db';
import Link from 'next/link';

export default async function SnippetShowPage(props: PageProps) {
  const snippetId = Number(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: {
      id: snippetId,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            className="p-2 border rounded"
            href={`/snippets/${snippet.id}/edit`}
          >
            Edit
          </Link>
          <button className="p-2 border rounded" type="button">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200 text-gray-700 font-mono text-sm overflow-x-auto">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
