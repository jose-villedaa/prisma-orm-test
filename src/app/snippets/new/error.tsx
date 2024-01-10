'use client';

import React from 'react';

type ErrorPageProps = {
  error: Error;
};

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div>
      <h1 className="text-xl bold">
        Error
      </h1>
      <pre>
        {error.message}
      </pre>
    </div>
  );
}
