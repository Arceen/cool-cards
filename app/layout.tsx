import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const clashDisplay = localFont({
  src: "./fonts/ClashDisplay.ttf",
});

export const metadata: Metadata = {
  title: "Coding test",
  description: "Another day another grind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
