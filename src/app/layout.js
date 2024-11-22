import './globals.css';

import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/theme-provider.jsx';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'World Padel Trips Community',
  description: 'Join the fastest growing padel community',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
  
        </ThemeProvider>
      </body>
    </html>
  );
}