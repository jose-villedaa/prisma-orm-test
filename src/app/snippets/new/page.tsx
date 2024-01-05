import React from 'react';
import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function SnippetCreatePage(): JSX.Element {
  async function createSnippet(formData: FormData) {
    'use server';

    const title: FormDataEntryValue = formData.get('title') as string;
    const code: FormDataEntryValue = formData.get('code') as string;

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect('/');
  }

  return (
    <form action={createSnippet}>
      <div>
        <h3 className="font-bold m-3 justify-center">Create Snippet</h3>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="code"
            placeholder="Enter your title..."
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
            placeholder="Enter your code..."
          />
        </div>
        <button
          type="submit"
          className="border rounded p-2 bg-blue-200 hover:bg-blue-300 transition-colors"
        >
          Create
        </button>
      </div>
    </form>
  );
}
