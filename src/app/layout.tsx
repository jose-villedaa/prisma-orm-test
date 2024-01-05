import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Snippets',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-12">{children}</div>
      </body>
    </html>
  );
}
