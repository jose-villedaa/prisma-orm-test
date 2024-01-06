'use client';

import React, { useState } from 'react';
import type { Snippet } from '@prisma/client';
import { Editor } from '@monaco-editor/react';
import * as serverActions from '@/actions';

export interface EditFormProps {
  snippet: Snippet;
}

export default function EditForm({ snippet }: EditFormProps): JSX.Element {
  const [code, setCode] = useState<string>(snippet.code);

  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  const EditSnippetAction = serverActions.editSnippet.bind(null, snippet.id, code);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="typescript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={EditSnippetAction}>
        <button type="submit" className="p-2 border rounded mt-5 hover:bg-gray-200 transition-colors">
          Save
        </button>
      </form>
    </div>
  );
}
