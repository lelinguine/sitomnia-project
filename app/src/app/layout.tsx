import type { Metadata } from "next";
import "./base.css";
import "./../components/button/button.css";

import Auth from "@/components/Auth";

export const metadata: Metadata = {
  title: "Sitomnia",
};

import { DiscussionProvider } from '@/context/DiscussionContext';
import { RiskProvider } from '@/context/RiskContext';
import { NoteProvider } from "@/context/NotesContext";
import { UserProvider } from '@/context/UserContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>
          <UserProvider>
            <NoteProvider>
              <DiscussionProvider>
                <RiskProvider>
                  <Auth>
                    {children}
                  </Auth>
                </RiskProvider>
              </DiscussionProvider>
            </NoteProvider>
          </UserProvider>
        </main>
      </body>
    </html>
  );
}