'use client';

import React from 'react';
import * as serverActions from '@/actions';
import { useFormState } from 'react-dom';

export default function SnippetCreatePage(): JSX.Element {
  const [formState, action] = useFormState(serverActions.createSnippet, { message: '' });

  return (
    <form action={action}>
      <div>
        <h3 className="font-bold m-3 justify-center text-center w-full">Create Snippet</h3>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="border rounded p-2 w-full transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="code"
            placeholder="Enter your code..."
          />
        </div>

        {formState.message ? (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-600 animate-pulse">
            {formState.message}
          </div>
        ) : null}
        <button
          type="submit"
          className="border rounded p-2 bg-blue-200 hover:bg-blue-300 transition-colors duration-200 shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create
        </button>
      </div>
    </form>
  );
}
