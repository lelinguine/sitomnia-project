import type { Metadata } from "next";
import "./base.css";
import "./../components/button/button.css";

import Auth from "@/components/Auth";

export const metadata: Metadata = {
  title: "Sitomnia",
};

import { DiscussionProvider } from '@/context/DiscussionContext';
import { RiskProvider } from '@/context/RiskContext';
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
          <Auth>
            <UserProvider>
              <DiscussionProvider>
                <RiskProvider>
                  {children}
                </RiskProvider>
              </DiscussionProvider>
            </UserProvider>
          </Auth>
        </main>
      </body>
    </html>
  );
}