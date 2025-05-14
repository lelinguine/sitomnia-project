import type { Metadata } from "next";
import "./main.css";
import "./../components/button/button.css";

export const metadata: Metadata = {
  title: "Sitomnia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}