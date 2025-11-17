import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - My Next Js App",
  description: "Ashibullah Portfolio Next Js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased p-10`}>
        <nav>
          <ul className="flex gap-6 items-center justify-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/posts">Posts</Link></li>
          </ul>
        </nav>
        <div className="mt-6">
          {children}
        </div>
        
      </body>
    </html>
  );
}
