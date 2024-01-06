import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Snippets',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/code.png" />
      </head>
      <body className={inter.className}>
        <div className="container mx-auto px-12">{children}</div>
      </body>
    </html>
  );
}
