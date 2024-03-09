import React from 'react';
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/restaurants/${params.id}`).then((res) => res.json())

  return {
    title: `${data.restaurant.name} | オリワン`,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
