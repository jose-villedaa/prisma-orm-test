import React from 'react';
import { CircularProgress } from '@mui/material';

export default function SnippetLoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <CircularProgress
        color="primary"
        size={100}
      />
    </div>
  );
}
