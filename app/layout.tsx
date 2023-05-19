import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modal/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone practice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
