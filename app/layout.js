import { Geist, Geist_Mono } from 'next/font/google';
import { Urbanist, Bokor } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const urbanistFont = Urbanist({
  subsets: ['latin'],
  weights: ['400', '600'],
});

const bokorFont = Bokor({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: "Hi, I'm Kush",
  description: 'Kush Singhy - Personal Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanistFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
