'use client';

import React from 'react';

type CodeProps<Code> = {
  code: Code;
};

function Code({ code }: CodeProps<string>): JSX.Element {
  return (
    <pre className="p-3 border rounded bg-gray-200 border-gray-200 text-gray-800 font-mono text-sm overflow-x-auto">
      <code className="">{code}</code>
    </pre>
  );
}

export default Code;
