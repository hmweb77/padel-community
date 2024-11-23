import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';




export const metadata = {
  title: 'World Padel Trips Community',
  description: 'Join the fastest growing padel community',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
       
          <Navbar />
          <main>{children}</main>
          <Footer />

      </body>
    </html>
  );
}