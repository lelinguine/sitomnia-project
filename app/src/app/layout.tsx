import type { Metadata } from "next";
import "./main.css";
import "./../components/button/button.css";

import Auth from "@/components/Auth";

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
            <Auth>
              {children}
            </Auth>
          </DiscussionProvider>
        </main>
      </body>
    </html>
  );
}