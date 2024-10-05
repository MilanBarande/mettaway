import type { Metadata } from 'next';
import { Monoton, Space_Mono, Turret_Road } from 'next/font/google';
import './globals.css';

const monoton = Monoton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const turretRoad = Turret_Road({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mettaway',
  description: 'Official Mettaway festival website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <div id="background-container" />
        <div id="content-wrapper">{children}</div>
      </body>
    </html>
  );
}
