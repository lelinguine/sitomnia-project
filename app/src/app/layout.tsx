import type { Metadata } from "next";
import "./globals.css";

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
        <view>
          {children}
        </view>
      </body>
    </html>
  );
}