'use server';

import React from 'react';
import { db } from '@/db';
import { notFound } from 'next/navigation';
import EditForm from '@/components/EditForm';

export default async function SnippetEditPage({ params }: PageProps<string>) {
  const id = Number(params.id);

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-xl bold">
        Edit Snippet
      </h1>
      <EditForm snippet={snippet} />
    </div>
  );
}
