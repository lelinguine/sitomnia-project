import type { Metadata } from "next";
import "./main.css";
import "./../components/button/button.css";

export const metadata: Metadata = {
  title: "Sitomnia",
};

import { DiscussionProvider } from '@/context/DiscussionContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>
          <DiscussionProvider>
            {children}
          </DiscussionProvider>
        </main>
      </body>
    </html>
  );
}