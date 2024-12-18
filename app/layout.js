import { Urbanist } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Kush Singhy',
  description: 'Kush Singhy - Personal Portfolio',
};

const urbanistFont = Urbanist({
  subsets: ['latin'],
  weights: ['400', '600'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanistFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
